import axios from 'axios'
import qs from 'qs'
import R from 'ramda'
import {
  keysToCamelCase,
  keysToSnakeCase
} from 'utils/jsonKeysTransformators'
import { AsyncStorage } from 'react-native'
import i18n from 'i18n'
import Config from 'react-native-config'
import { AuthService } from './'
import { startSingleScreenApp } from 'startApp'

type ConfigType = {
  baseURL?: string,
  timeout?: number,
  transformRequest?: () => mixed,
  transformResponse?: () => mixed,
  paramsSerializer?: () => mixed
}

const transformRequest = (data, headers) => {
  headers['Content-Type'] = 'application/json'
  headers['Accept-Language'] = i18n.language

  if (data) {
    const transformedData = keysToSnakeCase(data)
    return JSON.stringify(transformedData)
  }

  return JSON.stringify(data)
}

const transformResponse = data => {
  if (data) {
    const parsedData = R.is(String, data) ? JSON.parse(data) : data
    return keysToCamelCase(parsedData)
  }
  return data
}

const paramsSerializer = params => {
  if (params) {
    return qs.stringify(keysToSnakeCase(params))
  }
  return params
}

const unpackResponse = response => response.data

const addToken = async config => {
  const accessToken = await AsyncStorage.getItem('@Shoplo:accessToken')
  const tokenType = await AsyncStorage.getItem('@Shoplo:tokenType')
  const token = `${tokenType} ${accessToken}`

  if (accessToken !== null && tokenType !== null) {
    config.headers['Authorization'] = token
  }

  return config
}

const throwDefaultError = () => {
  const t = i18n.t('Error:unknown')
  throw new Error(t)
}

const throwNoConnectionError = () => {
  const t = i18n.t('Error:noConnection')
  throw new Error(t)
}

const throwClientError = data => {
  const { message = '' } = R.is(String, data) ? JSON.parse(data) : data
  throw new Error(message)
}

const cleanStorageAndRedirect = async () => {
  try {
    const keys = ['username', 'tokenType', 'accessToken', 'profile', 'permissions'].map(key => `@Shoplo:${key}`)
    await AsyncStorage.multiRemove(keys)
  } finally {
    startSingleScreenApp()
  }
}

const handleErrorInterceptor = async (error) => {
  if (error.response) {
    const { data, status } = error.response
    if (status === 401 || status === 403) {
      if (await AuthService.isLoggedIn()) {
        await cleanStorageAndRedirect()
      } else {
        throwClientError(data)
      }
    } else if (status >= 400 && status < 500) {
      throwClientError(data)
    } else {
      throwDefaultError()
    }
  } else if (error.request) {
    if (error.message === 'Network Error') {
      throwNoConnectionError()
    } else {
      throw error
    }
  } else {
    throwDefaultError()
  }
}

const defaultConfig = {
  baseURL: Config.BASE_URL,
  timeout: 10000,
  transformRequest,
  transformResponse,
  paramsSerializer
}

const createApiConfig = (config : ConfigType = {}) => {
  const mergedConfig : ConfigType = {...defaultConfig, ...config}
  const instance = axios.create(mergedConfig)

  instance.interceptors.response.use(unpackResponse, handleErrorInterceptor)
  instance.interceptors.request.use(addToken, handleErrorInterceptor)

  return instance
}

export default createApiConfig

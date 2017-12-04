import i18next from 'i18next'
import moment from 'moment'
import R from 'ramda'
import DeviceInfo from 'react-native-device-info'
import resources from 'locales'

// Add all locales that your app uses
import 'moment/locale/pl'

const languageDetector = {
  type: 'languageDetector',
  async: false,
  detect: (callback) => {
    const [language] = DeviceInfo.getDeviceLocale().split('-')
    return language
  },
  init: R.always(undefined),
  cacheUserLanguage: R.always(undefined)
}

const i18n = i18next
  .use(languageDetector)
  .init({
    initImmediate: true,
    fallbackLng: 'en',
    resources,
    interpolation: {
      escapeValue: false
    }
  })

moment.locale(i18n.language)

export default i18n

import React from 'react'
import { Platform } from 'react-native'
import { Text } from 'components'
import i18n from 'i18n'
import currencyFormatter from 'currencyformatter.js'

const Price = ({ currency, children, style, ...rest }) => {
  const price = currency
    ? Platform.OS === 'ios'
      ? Number(children / 100).toLocaleString(i18n.language, { style: 'currency', currency })
      : currencyFormatter.format(children / 100, { locale: i18n.language, currency: currency })
    : Number(children / 100).toLocaleString(i18n.language)

  return (
    <Text
      style={style}
      {...rest}
    >
      {price}
    </Text>
  )
}

export default Price

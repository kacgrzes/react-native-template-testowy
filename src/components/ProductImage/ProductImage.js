import React from 'react'
import R from 'ramda'
import { View, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Title } from 'components'
import styles from './ProductImage.styles'
import colors, { ACTIVE_OPACITY } from 'theme'

const ProductImage = ({ style, outlineStyle, imageTitle, selected, onPress = null, variant, children, defaultImage = require('assets/images/logo-circle.png'), displaySpinner = false }) => {
  const variantImage = variant && variant.src ? variant.src : null
  const source = variantImage
    ? { uri: variantImage }
    : defaultImage
  const titleView = imageTitle
    ? <Title style={styles.title}>{imageTitle}</Title>
    : null
  const activityIndicatorView = displaySpinner
    ? (
      <View style={styles.spinnerBackground}>
        <ActivityIndicator color={colors.primary} />
      </View>
    )
    : null

  return (
    <TouchableOpacity
      disabled={R.not(R.is(Function, onPress))}
      activeOpacity={ACTIVE_OPACITY}
      onPress={onPress}
      style={[styles.container, style]}
    >
      <View style={[styles.imageContainer, outlineStyle, { borderColor: selected ? colors.primary : colors.grey }]}>
        <Image
          source={source}
          style={styles.image}
          resizeMode={'contain'}
        />
        {titleView}
      </View>
      {children}
      {activityIndicatorView}
    </TouchableOpacity>
  )
}

export default ProductImage

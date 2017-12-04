import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import Modal from 'react-native-modal'
import i18n from 'i18n'
import { Text, Title } from 'components'
import styles from './Onboarding.styles'
import colors, { BACKDROP_OPACITY } from 'theme'

const shoploLogo = require('assets/images/logo-circle.png')
const addProduct = require('assets/images/onboarding-addproduct.png')
const overview = require('assets/images/onboarding-overview.png')
const { containerView, image, infoView, textContainer, buttonText, titleText, contentText, addProductImage, imageNoProps, overviewImage, modalContainer } = styles

const Onboarding = ({ imageSource = shoploLogo, title = 'Shoplo', text = '', onModalClosed, modalVisible }) => {
  const renderOnboarding = () => {
    return (
      <View style={containerView}>
        <Image style={[image, imageSource === addProduct && addProductImage, imageSource === shoploLogo && imageNoProps, imageSource === overview && overviewImage]} source={imageSource} resizeMode='contain' />
        <View style={infoView}>
          <View style={textContainer}>
            <Title style={titleText}>{title}</Title>
            <Text style={contentText}>{text}</Text>
          </View>
          <TouchableOpacity onPress={() => onModalClosed()}>
            <Text style={buttonText}>{i18n.t('Onboarding:gotIt')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  return (
    <Modal
      animationIn='fadeIn'
      animationOut='fadeOut'
      backdropColor={colors.silver}
      backdropOpacity={BACKDROP_OPACITY}
      isVisible={modalVisible}
      style={modalContainer}
    >
      {renderOnboarding()}
    </Modal>
  )
}

export default Onboarding

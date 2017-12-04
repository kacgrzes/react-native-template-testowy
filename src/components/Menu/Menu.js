import React, { Component } from 'react'
import { ImageBackground, View } from 'react-native'
import styles from './Menu.styles'
import colors, { BACKDROP_OPACITY } from 'theme'
import { Link, Icon } from 'components'
import { AuthService, PermissionService } from 'services'
import { startSingleScreenApp } from 'startApp'
import Modal from 'react-native-modal'

const {
  modalContainer,
  menuStyle,
  linkStyle,
  imageStyle
} = styles

class Menu extends Component {
  state = {
    canPreview: false
  }

  componentDidMount = async () => {
    const canPreview = await PermissionService.check('ORDERS_PREVIEW')
    this.setState({ canPreview })
  }

  onLinkPress = (screen) => {
    this.props.onHide()
    // FIXME: this is hack! Change this!
    setTimeout(() => {
      this.props.navigator.showModal({ screen })
    }, 500)
  }

  logout = async () => {
    this.props.onHide()

    try {
      await AuthService.logout()
    } catch (error) {
      // TODO: handle logout error somehow
    } finally {
      startSingleScreenApp()
    }
  }

  render () {
    return (
      <Modal
        animationIn='fadeIn'
        animationOut='fadeOut'
        backdropColor={colors.silver}
        backdropOpacity={BACKDROP_OPACITY}
        isVisible={this.props.isOpen}
        onBackdropPress={this.props.onHide}
        onBackButtonPress={this.props.onHide}
        style={modalContainer}
      >
        <View style={menuStyle}>
          <ImageBackground
            style={imageStyle}
            resizeMode='contain'
            source={require('assets/images/menu-background.png')}
          >
            <Icon
              source={require('assets/images/icon-close.png')}
              tintColor={colors.white}
              onPress={this.props.onHide}
              style={{
                paddingHorizontal: 15,
                paddingVertical: 8
              }}
            />
            <Link style={linkStyle} disabled={!this.props.isOpen} onPress={() => this.onLinkPress('Shoplo.Search')}>{this.props.t('Menu:search')}</Link>
            {this.state.canPreview && <Link style={linkStyle} disabled={!this.props.isOpen} onPress={() => this.onLinkPress('Shoplo.ToDos')}>{this.props.t('Menu:toDos')}</Link>}
            <Link style={linkStyle} disabled={!this.props.isOpen} onPress={() => this.onLinkPress('Shoplo.NotificationSettings')}>{this.props.t('Menu:notificationSettings')}</Link>
            <Link style={linkStyle} disabled={!this.props.isOpen} onPress={this.logout}>{this.props.t('Menu:logout')}</Link>
          </ImageBackground>
        </View>
      </Modal>
    )
  }
}

export default Menu

import React, { Component } from 'react'
import { View, Image, ImageBackground } from 'react-native'
import { Card, Button, TextInput, Link, Text, KeyboardAware } from 'components'
import styles from './PasswordRecovery.styles'
import { font } from 'theme'
import UserService from 'services/UserService'

const { backgroundImage, logoView, containerView, card, title, subtitle, button, linkView, link } = styles
const iconMail = require('assets/images/icon-mail.png')

export default class Login extends Component {
  static navigatorStyle = {
    drawUnderNavBar: true,
    navBarTransparent: true,
    navBarTranslucent: true,
    navBarTextFontFamily: font.bold,
    screenBackgroundColor: 'transparent',
    rootBackgroundImageName: 'login-background'
  }

  static navigatorButtons = {
    leftButtons: [
      {
        id: 'back',
        component: 'App.BackButton'
      }
    ],
    animated: true
  }

  state = {
    email: '',
    emailError: '',
    isPasswordVisible: false
  }

  validateEmail = () => {
    const { t } = this.props

    if (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.email)) {
      this.setState({ emailError: '' })
    } else {
      this.setState({ emailError: t('Login:wrongEmail') })
    }
  }

  changeEmailText = (email) => {
    this.setState({
      email,
      emailError: ''
    })
  }

  showLoginScene = () => {
    this.props.navigator.popToRoot()
  }

  sendRecoveryInstructions = async () => {
    await this.validateEmail()

    if (this.state.emailError === '') {
      try {
        await UserService.resetPassword(this.state.email)
        this.props.navigator.showInAppNotification({
          screen: 'App.InAppNotification',
          passProps: {
            message: 'Go check your email!',
            isSuccess: true
          },
          autoDismissTimerSec: 3
        })
        this.showLoginScene()
      } catch (error) {
        this.props.navigator.showInAppNotification({
          screen: 'App.InAppNotification',
          passProps: {
            message: error.message
          },
          autoDismissTimerSec: 3
        })
      }
    }
  }

  render () {
    return (
      <ImageBackground
        style={backgroundImage}
        source={require('assets/images/login-background.png')}
      >
        <KeyboardAware contentContainerStyle={{ flex: 1 }}>
          <View style={logoView}>
            <Image source={require('assets/images/logo.png')} style={{ width: 170, height: 50 }} />
          </View>
          <View style={containerView}>
            <Card
              rounded
              shadowed={false}
              style={card}
            >
              <Text numberOfLines={1} style={title}>{this.props.t('Login:passwordRecovery')}</Text>
              <Text numberOfLines={2} style={subtitle}>{this.props.t('Login:recoveryDescription')}</Text>
              <TextInput
                label={this.props.t('Login:yourEmail')}
                imageUrl={iconMail}
                returnKeyType='send'
                keyboardType='email-address'
                value={this.state.email}
                error={this.state.emailError}
                onBlur={this.validateEmail}
                onChange={this.changeEmailText}
                onSubmitEditing={this.sendRecoveryInstructions}
              />
              <Button
                style={button}
                onPress={this.sendRecoveryInstructions}
              >{this.props.t('Login:sendRecoveryInstructions')}</Button>
            </Card>
            <View style={linkView}>
              <Link style={link} onPress={this.showLoginScene}>{this.props.t('Login:backToLogin')}</Link>
            </View>
          </View>
        </KeyboardAware>
      </ImageBackground>
    )
  }
}

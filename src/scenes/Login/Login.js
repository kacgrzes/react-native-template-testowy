import React, { Component } from 'react'
import { View, Image, ImageBackground } from 'react-native'
import { Card, Button, Link, KeyboardAware, Spinner } from 'components'
import Communications from 'react-native-communications'

import colors from 'theme'

import AuthService from 'services/AuthService'
import NavigationService from 'services/NavigationService'
import { startTabBasedApp } from 'startApp'

import models, { Form, TextInputFactory, PasswordFactory } from 'forms'

const iconMail = require('assets/images/icon-mail.png')
const { Auth } = models

class Login extends Component {
  static navigatorStyle = {
    navBarHidden: true,
    drawUnderNavBar: true,
    navBarTransparent: true,
    navBarTranslucent: true,
    screenBackgroundColor: 'transparent',
    rootBackgroundImageName: 'login-background'
  }

  state = {
    isSpinnerVisible: false,
    loginValue: null
  }

  options = {
    fields: {
      username: {
        label: this.props.t('Login:loginLabel'),
        factory: TextInputFactory,
        autoCapitalize: 'none',
        returnKeyType: 'next',
        keyboardType: 'email-address',
        imageUrl: iconMail,
        onSubmitEditing: () => this.form.getComponent('password').ref.focus(),
        onBlur: () => this.form.getComponent('username').validate()
      },
      password: {
        label: this.props.t('Login:passwordLabel'),
        factory: PasswordFactory,
        autoCapitalize: 'none',
        returnKeyType: 'send',
        onSubmitEditing: () => this.showChooseAccountScene()
      }
    }
  }

  constructor (props) {
    super(props)

    NavigationService.setNavigator(props.navigator)
  }

  showChooseAccountScene = async () => {
    const values = this.form.getValue()

    if (!values) {
      return
    }

    const {
      username,
      password
    } = values

    this.setState({ isSpinnerVisible: true })

    const result = await AuthService.login({ username, password })

    this.setState({ isSpinnerVisible: false }, () => {
      switch (result.type) {
        case 'success':
          setTimeout(() => {
            startTabBasedApp()
          }, 100)
          break
        case 'chooseAccount':
          this.props.navigator.push({
            screen: 'Shoplo.ChooseAccount',
            passProps: {
              apps: result.payload
            }
          })
          break
        case 'error':
          this.props.navigator.showInAppNotification({
            screen: 'Shoplo.InAppNotification',
            passProps: {
              message: result.payload.message
            },
            autoDismissTimerSec: 3
          })
          break
      }
    })
  }

  showPasswordRecoveryScene = () => {
    this.props.navigator.push({
      screen: 'Shoplo.PasswordRecovery'
    })
  }

  onLoginFormChange = loginValue => {
    this.setState({ loginValue })
  }

  showSignupPage = () => Communications.web('https://store.shoplo.com/register')

  render () {
    const { t } = this.props

    return (
      <ImageBackground
        style={{ flex: 1, backgroundColor: colors.primary }}
        source={require('assets/images/login-background.png')}
      >
        <KeyboardAware contentContainerStyle={{ flex: 1 }}>
          <View style={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center', maxHeight: 360, paddingVertical: 20 }}>
            <Image testID='Login:logo' source={require('assets/images/logo.png')} style={{ width: 170, height: 50 }} />
          </View>
          <View style={{ flexShrink: 0 }}>
            <Card
              rounded
              shadowed={false}
              style={{ paddingBottom: 30, paddingHorizontal: 14, paddingTop: 20, marginHorizontal: 15 }}
            >
              <Form
                type={Auth}
                ref={ref => { this.form = ref }}
                options={this.options}
                value={this.state.loginValue}
                onChange={this.onLoginFormChange}
              />
              <Button
                style={{ marginTop: 24 }}
                onPress={this.showChooseAccountScene}
                testID='Login:signIn'
              >{ t('Login:button') }</Button>
            </Card>
            <View style={{ padding: 20, alignItems: 'center', justifyContent: 'flex-start', flexShrink: 0 }}>
              <Link style={{ color: colors.white, marginBottom: 10 }} onPress={this.showSignupPage}>{ t('Login:noAccount') }</Link>
              <Link style={{ color: colors.white }} onPress={this.showPasswordRecoveryScene}>{ t('Login:noPassword') }</Link>
            </View>
          </View>
        </KeyboardAware>
        <Spinner visible={this.state.isSpinnerVisible} />
      </ImageBackground>
    )
  }
}

export default Login

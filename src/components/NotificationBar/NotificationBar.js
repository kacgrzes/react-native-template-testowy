import React, { Component } from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import { withTranslations } from 'hoc'
import { Text } from 'components'
import styles from './NotificationBar.styles'
import { PermissionService } from 'services'

const arrowRightIcon = require('assets/images/icon-disclosure.png')
const alarmIcon = require('assets/images/icon-alarm.png')

const { touchable, container, arrowRight, text } = styles

class NotificationBar extends Component {
  state = {
    canPreview: false
  }

  componentDidMount = async () => {
    const canPreview = await PermissionService.check('ORDERS_PREVIEW')
    this.setState({ canPreview })
  }

  render () {
    const { onPress, unreadNotificationCount = 0, t } = this.props
    const { canPreview } = this.state

    const unreadNotifications = t('Notification:unreadNotification', {
      actionsCount: unreadNotificationCount,
      defaultValue: '',
      count: unreadNotificationCount
    })

    return unreadNotificationCount > 0 && canPreview
    ? (
      <TouchableOpacity style={touchable} onPress={onPress}>
        <View style={container}>
          <Image source={alarmIcon} />
          <Text style={text}>{unreadNotifications}</Text>
          <Image source={arrowRightIcon} style={arrowRight} />
        </View>
      </TouchableOpacity>
    )
    : null
  }
}

export default withTranslations(NotificationBar)

import React, { Component } from 'react'
import { Screen } from 'components'

class Tab1 extends Component {
  static navigatorButtons = {
    leftButtons: [
      {
        icon: require('assets/images/icon-menu.png'),
        id: 'menu'
      }
    ],
    rightButtons: [
      {
        icon: require('assets/images/icon-zoom.png'),
        id: 'search'
      }
    ]
  }

  render () {
    return (
      <Screen>
        <Text>Tab1</Text>
      </Screen>
    )
  }
}

export default Tab1

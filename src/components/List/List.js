// @flow
import React, { Component } from 'react'
import { View, FlatList, RefreshControl } from 'react-native'
import { Indicator } from 'components'
import colors from 'theme'

type NotificationType = {
  screen: string,
  passProps: {
    message: string
  },
  autoDismissTimerSec: number
}

export type Props = {
  testID: string,
  data: Array<any> | null,
  pages: number | null,
  navigator: {
    showInAppNotification: (NotificationType) => mixed
  },
  renderItem: () => ?React.Element<any>,
  onFetchItems: (number) => Promise<*>,
  ListEmptyComponent: () => ?React.Element<*>,
  keyExtractor?: () => mixed
}

export type State = {
  isRefreshing: boolean,
  isLoading: boolean,
  page: number
}

// NOTE: previously it was PureComponent but it won't re-render when Props remains equal
class List extends Component {
  state: State
  props: Props

  constructor (props: Props) : void {
    super(props)
    this.state = {
      isRefreshing: false,
      isLoading: false,
      page: 1
    }
  }

  onRefresh = () => {
    this.setState({
      isRefreshing: true,
      page: 1
    }, this.loadItems)
  }

  loadItems = async () => {
    try {
      const { page } :
            { page: number } = await this.props.onFetchItems({ page: this.state.page })

      this.setState({
        page
      })
    } catch (error) {
      const message : string = error.message

      const notification : NotificationType = {
        screen: 'Shoplo.InAppNotification',
        passProps: {
          message
        },
        autoDismissTimerSec: 3
      }

      this.props.navigator.showInAppNotification(notification)
    } finally {
      this.setState({
        isLoading: false,
        isRefreshing: false
      })
    }
  }

  keyExtractor = (item, index) => {
    if (this.props.keyExtractor) {
      return this.props.keyExtractor(item, index)
    } else {
      return item.id
    }
  }

  onEndReached = () => {
    const { isLoading, isRefreshing, page } = this.state
    const { pages } = this.props

    if (pages && page >= pages) {
      return
    }

    if (!isLoading && !isRefreshing) {
      this.setState({
        page: this.state.page + 1,
        isLoading: true
      }, this.loadItems)
    }
  }

  renderFooter = () => {
    if (!this.state.isLoading) return null

    return (
      <View style={{ padding: 20 }}>
        <Indicator />
      </View>
    )
  }

  render () {
    return this.props.data !== null
      ? (
        <FlatList
          contentContainerStyle={{flexGrow: 1, flexDirection: 'column', justifyContent: 'flex-start'}}
          testID={this.props.testID}
          data={this.props.data}
          keyExtractor={this.keyExtractor}
          renderItem={this.props.renderItem}
          ListFooterComponent={this.renderFooter}
          ListEmptyComponent={this.props.ListEmptyComponent}
          onEndReached={this.onEndReached}
          onEndReachedThreshold={0.5}
          refreshControl={
            <RefreshControl
              refreshing={this.state.isRefreshing}
              onRefresh={this.onRefresh}
              tintColor={colors.primary}
            />
          }
        />
      )
      : <Indicator />
  }
}

export default List

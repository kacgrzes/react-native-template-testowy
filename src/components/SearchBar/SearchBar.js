import React, { Component } from 'react'
import { Platform, NativeModules, View } from 'react-native'
import SearchBox from 'react-native-search-box'
import colors, { font } from 'theme'
import { Icon, Indicator } from 'components'

const { StatusBarManager } = NativeModules

export default class SearchBar extends Component {
  state = {
    statusBarHeight: 20,
    isLoading: this.props.isLoading
  }

  componentWillMount () {
    if (Platform.OS === 'ios') {
      StatusBarManager.getHeight(result => this.setState({ statusBarHeight: result.height }))
    } else {
      this.setState({ statusBarHeight: 0 })
    }
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({ isLoading: nextProps.isLoading })
  }

  renderDeleteIcon = () => {
    return this.state.isLoading
      ? <Indicator size={14} color={colors.white} />
      : <Icon imageStyle={{ width: 14, height: 14 }} source={require('assets/images/icon-search-delete.png')} />
  }

  render () {
    const { inputRef, ...rest } = this.props

    return (
      <View style={{ paddingTop: this.state.statusBarHeight + 3, paddingBottom: 3, paddingHorizontal: 6, backgroundColor: colors.primary }}>
        <SearchBox
          autoFocus
          autoCapitalize='none'
          placeholder={this.props.t('Common:search')}
          backgroundColor={colors.primary}
          placeholderTextColor={colors.white + '90'}
          selectionColor={colors.white}
          tintColorSearch={colors.white}
          tintColorDelete={colors.white}
          cancelButtonTextStyle={{
            color: colors.white,
            fontFamily: font.regular,
            fontSize: 16,
            lineHeight: 20
          }}
          cancelTitle={this.props.t('Common:cancel')}
          inputStyle={{
            backgroundColor: colors.searchBackground,
            fontFamily: font.regular,
            fontSize: 16,
            lineHeight: 20,
            paddingHorizontal: 8,
            color: colors.white
          }}
          placeholderCollapsedMargin={12}
          placeholderExpandedMargin={28}
          searchIconExpandedMargin={14}
          iconSearch={<Icon imageStyle={{ width: 14, height: 14 }} source={require('assets/images/icon-search.png')} />}
          iconDelete={this.renderDeleteIcon()}
          ref={inputRef}
          {...rest}
        />
      </View>
    )
  }
}

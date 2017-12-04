import React, {Component} from 'react'

import {
  FlatList,
  Image,
  View,
  Text,
  TouchableOpacity
} from 'react-native'

import styles from './Timeline.styles'

let defaultCircleSize = 16
let defaultCircleColor = '#007AFF'
let defaultLineWidth = 2
let defaultLineColor = '#007AFF'
let defaultDotColor = 'white'
let defaultInnerCircle = 'none'

export default class Timeline extends Component {
  static defaultProps = {
    circleSize: defaultCircleSize,
    circleColor: defaultCircleColor,
    lineWidth: defaultLineWidth,
    lineColor: defaultLineColor,
    innerCircle: defaultInnerCircle
  }

  constructor (props, context) {
    super(props, context)

    this.isRenderSeparator = this.props.separator != null ? this.props.separator : true

    this.state = {
      x: 0,
      width: 0
    }
  }

  render () {
    return (
      <FlatList
        ref='listView'
        containerStyle={[styles.listview]}
        data={this.props.data}
        extraData={this.state}
        renderItem={this.renderItem}
        {...this.props.options}
        keyExtractor={this.keyExtractor}
      />
    )
  }

  keyExtractor = (item, index) => index

  renderItem = ({item, index}) => {
    return (
      <View style={[styles.rowContainer, this.props.rowContainerStyle]}>
        {this.renderTime({item, index})}
        {this.renderEvent({item, index})}
      </View>
    )
  }

  renderTime = ({item, index}) => {
    if (this.props.renderTime) {
      return this.props.renderTime({item, index})
    }

    var timeWrapper = null
    switch (this.props.columnFormat) {
      case 'single-column-left':
        timeWrapper = {
          alignItems: 'flex-end'
        }
        break
      case 'single-column-right':
        timeWrapper = {
          alignItems: 'flex-start'
        }
        break
      case 'two-column':
        timeWrapper = {
          flex: 1,
          alignItems: index % 2 === 0 ? 'flex-end' : 'flex-start'
        }
        break
    }

    return (
      <View style={timeWrapper}>
        <View style={[styles.timeContainer, this.props.timeContainerStyle]}>
          <Text style={[styles.time, this.props.timeStyle]}>{item.time}</Text>
        </View>
      </View>
    )
  }

  renderEvent = ({item, index}) => {
    let isFirst = index === 0
    let isLast = index === this.props.data.length - 1

    return (
      <View
        style={[styles.details]}
        onLayout={(evt) => {
          if (!this.state.x && !this.state.width) {
            var {x, width} = evt.nativeEvent.layout
            this.setState({x, width})
          }
        }}>
        <View style={styles.lineContainer}>
          <View style={[styles.line, this.props.lineStyle, isFirst && {borderColor: 'transparent'}]} />
          <View style={[styles.circle, this.props.circleStyle]} />
          <View style={[styles.line, this.props.lineStyle, isLast && {borderColor: 'transparent'}]} />
        </View>
        <TouchableOpacity disabled={this.props.onEventPress == null}
          style={[ styles.detailContainer, this.props.detailContainerStyle ]}
          onPress={() => this.props.onEventPress ? this.props.onEventPress(item) : null}
        >
          <View style={{paddingTop: 10, paddingBottom: 10}}>
            {this.renderDetail({item, index})}
          </View>
          {this.renderSeparator({item, index})}
        </TouchableOpacity>
      </View>
    )
  }

  renderDetail = ({item, index}) => {
    if (this.props.renderDetail) {
      return this.props.renderDetail({item, index})
    }

    let title = <Text style={[styles.title, this.props.titleStyle]}>{item.title}</Text>
    if (item.description) {
      title = (
        <View>
          <Text style={[styles.title, this.props.titleStyle]}>{item.title}</Text>
          <Text style={[styles.description, this.props.descriptionStyle]}>{item.description}</Text>
        </View>
      )
    }
    return (
      <View style={styles.container}>
        {title}
      </View>
    )
  }

  renderCircle = ({item, index}) => {
    if (this.props.renderCircle) {
      return this.props.renderCircle({item, index})
    }

    var circleSize = item.circleSize ? item.circleSize : this.props.circleSize ? this.props.circleSize : defaultCircleSize
    var circleColor = item.circleColor ? item.circleColor : this.props.circleColor ? this.props.circleColor : defaultCircleColor
    var lineWidth = item.lineWidth ? item.lineWidth : this.props.lineWidth ? this.props.lineWidth : defaultLineWidth

    var circleStyle = null

    switch (this.props.columnFormat) {
      case 'single-column-left':
        circleStyle = {
          width: this.state.x ? circleSize : 0,
          height: this.state.x ? circleSize : 0,
          borderRadius: circleSize / 2,
          backgroundColor: circleColor,
          left: this.state.x - (circleSize / 2) + ((lineWidth - 1) / 2)
        }
        break
      case 'single-column-right':
        circleStyle = {
          width: this.state.width ? circleSize : 0,
          height: this.state.width ? circleSize : 0,
          borderRadius: circleSize / 2,
          backgroundColor: circleColor,
          left: this.state.width - (circleSize / 2) - ((lineWidth - 1) / 2)
        }
        break
      case 'two-column':
        circleStyle = {
          width: this.state.width ? circleSize : 0,
          height: this.state.width ? circleSize : 0,
          borderRadius: circleSize / 2,
          backgroundColor: circleColor,
          left: this.state.width - (circleSize / 2) - ((lineWidth - 1) / 2)
        }
        break
    }

    var innerCircle = null
    switch (this.props.innerCircle) {
      case 'icon':
        let iconSource = item.icon ? item.icon : this.props.icon
        let iconStyle = {
          height: circleSize,
          width: circleSize
        }
        innerCircle = (<Image source={iconSource} style={[iconStyle, this.props.iconStyle]} />)
        break
      case 'dot':
        let dotStyle = {
          height: circleSize / 2,
          width: circleSize / 2,
          borderRadius: circleSize / 4,
          backgroundColor: item.dotColor ? item.dotColor : this.props.dotColor ? this.props.dotColor : defaultDotColor
        }
        innerCircle = (<View style={[styles.dot, dotStyle]} />)
        break
    }
    return (
      <View style={[styles.circle, circleStyle, this.props.circleStyle]}>
        {innerCircle}
      </View>
    )
  }

  renderSeparator = ({ item, index }) => {
    let isLast = index === this.props.data.length - 1

    if (this.isRenderSeparator && !isLast) {
      return (
        <View style={[styles.separator, this.props.separatorStyle]} />
      )
    } else { return null }
  }
}

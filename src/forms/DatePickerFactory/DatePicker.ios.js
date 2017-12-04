// @see https://github.com/gcanti/tcomb-form-native/blob/master/lib/templates/bootstrap/datepicker.ios.js
import React from 'react'
import PropTypes from 'prop-types'
import {
  Animated,
  View,
  TouchableOpacity,
  DatePickerIOS
} from 'react-native'
import { TextInput, Text, Icon } from 'components'
import colors, { font } from 'theme'

const UIPICKER_HEIGHT = 216

class CollapsibleDatePickerIOS extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      height: new Animated.Value(0)
    }
  }

  componentWillReceiveProps (nextProps) {
    let animation = Animated.timing

    animation(
      this.state.height,
      {
        toValue: nextProps.locals.isCollapsed ? 0 : UIPICKER_HEIGHT,
        duration: 200
      }
    ).start()
  }

  render () {
    const locals = this.props.locals
    const stylesheet = locals.stylesheet
    let touchableStyle = stylesheet.dateTouchable.normal
    let datepickerStyle = stylesheet.datepicker.normal
    if (locals.hasError) {
      touchableStyle = stylesheet.dateTouchable.error
      datepickerStyle = stylesheet.datepicker.error
    }
    let formattedValue = String(locals.value)

    if (locals.config) {
      if (locals.config.format) {
        formattedValue = locals.config.format(locals.value)
      }
    }
    const height = this.props.locals.isCollapsed ? 0 : UIPICKER_HEIGHT

    return (
      <View>
        <TouchableOpacity
          style={touchableStyle}
          disabled={locals.disabled}
          onPress={() => {
            if (typeof locals.onPress === 'function') {
              locals.onPress()
            }
          }}
        >
          <TextInput
            value={formattedValue}
            label={this.props.t('Dashboard:datePicker:selectDate')}
            textColor={colors.dark}
            disabled
            disabledLineType='solid'
            renderAccessory={() => {
              return (
                <Icon
                  style={{ paddingLeft: 8 }}
                  tintColor={colors.primary}
                  source={require('assets/images/icon-calendar.png')} />
              )
            }}
          />
        </TouchableOpacity>
        <Animated.View
          style={{ height: this.state.height, overflow: 'hidden' }}
        >
          <DatePickerIOS
            ref='input'
            accessibilityLabel={locals.label}
            date={locals.value}
            maximumDate={locals.maximumDate}
            minimumDate={locals.minimumDate}
            minuteInterval={locals.minuteInterval}
            mode={locals.mode}
            onDateChange={value => locals.onChange(value)}
            timeZoneOffsetInMinutes={locals.timeZoneOffsetInMinutes}
            style={[datepickerStyle, { height: height }]}
            t={this.props.t}
          />
        </Animated.View>
      </View>
    )
  }
}

CollapsibleDatePickerIOS.propTypes = {
  locals: PropTypes.object.isRequired
}

function datepicker ({ locals, t }) {
  if (locals.hidden) {
    return null
  }

  const stylesheet = locals.stylesheet
  let formGroupStyle = stylesheet.formGroup.normal

  const label = locals.label ? (
    <Text style={{ fontFamily: font.semibold }}>{locals.label}</Text>
  ) : null

  return (
    <View style={formGroupStyle}>
      {label}
      <CollapsibleDatePickerIOS locals={locals} t={t} />
    </View>
  )
}

export default datepicker

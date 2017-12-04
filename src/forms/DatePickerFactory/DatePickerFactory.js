import t from 'tcomb-form-native'
import React from 'react'
import DatePickerComponent from './DatePicker'

const { DatePicker } = t.form

// extend the base Component
class DatePickerFactory extends DatePicker {
  getTemplate () {
    return (locals) => {
      return <DatePickerComponent locals={locals} t={this.props.t} />
    }
  }

  getLocals () {
    const locals = super.getLocals()

    locals.isCollapsed = this.props.options.isCollapsed

    return locals
  }
}

export default DatePickerFactory

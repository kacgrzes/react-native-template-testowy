import React from 'react'
import t from 'tcomb-form-native'
import { TextInput } from 'components'

const { Textbox } = t.form

// extend the base Component
class TextInputFactory extends Textbox {
  getTemplate () {
    return (locals) => {
      return (
        <TextInput
          inputRef={ref => { this.ref = ref }}
          {...locals}
        />
      )
    }
  }

  getLocals () {
    const locals = super.getLocals()

    locals.imageUrl = this.props.options.imageUrl
    locals.renderAccessory = this.props.options.renderAccessory
    locals.multiline = this.props.options.multiline

    return locals
  }
}

export default TextInputFactory

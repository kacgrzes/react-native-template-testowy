// @flow
import React from 'react'
import { View, Image } from 'react-native'
import { TextField } from 'react-native-material-textfield'
import colors from 'theme'
import styles from './TextInput.styles'

const ICON_HEIGHT = 20

// FIXME: check why imageUrl cannot have optional string type
type Props = {
  label: string,
  help?: string,
  error?: string,
  value?: string,
  imageUrl?: string | number,
  autoCorrect?: boolean,
  autoCapitalize?: string,
  style?: *,
  inputRef?: () => mixed,
  rest?: Array<*>
}

const TextInput = ({
  label = '',
  help = '',
  error = '',
  value = '',
  imageUrl = null,
  autoCorrect = true,
  autoCapitalize = 'none',
  labelFontSize = 10,
  baseColor = colors.silver,
  editable = true,
  style,
  inputRef,
  onChange,
  ...rest
} : Props) => {
  const mergedStyles = [styles.textField, style]

  return <View style={styles.textFieldContainer}>
    {imageUrl && (
      <View style={styles.iconContainer}>
        <Image
          source={imageUrl}
          height={ICON_HEIGHT}
        />
      </View>
    )}
    <TextField
      label={label}
      title={help}
      error={error}
      value={value}

      // FIXME: move to const or to styles
      editable={editable}
      fontSize={14}
      labelFontSize={labelFontSize}
      labelPadding={5}
      labelHeight={20}
      textColor={colors.dark}
      tintColor={colors.primary}
      baseColor={baseColor}
      errorColor={colors.danger}
      {...styles}
      style={mergedStyles}
      autoCapitalize={autoCapitalize}
      autoCorrect={autoCorrect}
      ref={inputRef}
      onChangeText={onChange}
      {...rest}
    />
  </View>
}

export default TextInput

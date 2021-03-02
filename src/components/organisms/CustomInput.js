import React, { useState, useEffect } from 'react'
import { StyleSheet, View, TextInput, Text } from 'react-native'
import platform, { opacify } from '../../helpers/platform'
import _ from 'lodash'

const inputWidth = (platform.deviceWidth - 70) * 0.6 + 4

function CustomInput({
  styleBlock,
  textInput,
  _value,
  _onChangeText,
  disabled,
  title,
  isError,
  styleContainer,
  ...rest
}) {
  const [text, setText] = useState(_value)
  useEffect(() => {
    setText(_value === 'null' || !_value ? '' : _value)
  }, [_value])
  return(
    <View style={[styles.row, styleContainer]}>
      {!!title && <Text style={styles.title}>{title}</Text>}
      <View
        style={[
          styles.block,
          styleBlock,
          disabled && styles.disabled,
          _.size(text) && styles.selected,
          isError && styles.error
        ]}
      >
        <TextInput
          value={text}
          editable={!disabled}
          style={[styles.textInput, textInput]}
          autoCorrect={false}
          selectionColor={platform.brandBlack}
          underlineColorAndroid='transparent'
          onChangeText={newText => {
            setText(newText)
            if (typeof _onChangeText === 'function') {
              _onChangeText(newText)
            }
          }}
          {...rest}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    width: inputWidth / 1.5,
    color: platform.brandBlack,
    fontSize: 14,
    fontFamily: platform.fontMedium
  },
  block: {
    width: inputWidth,
    height: 36,
    borderWidth: 1,
    borderColor: opacify(platform.brandBlack, 0.3),
    marginHorizontal: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  textInput: {
    flex: 1,
    padding: 0,
    color: platform.brandBlack,
    fontSize: 12,
    fontFamily: platform.fontRegular,
    paddingHorizontal: 16
  },
  disabled: {
    backgroundColor: opacify(platform.brandGrey, 0.3)
  },
  selected: {
    borderColor: platform.brandBlack
  },
  error: {
    borderColor: platform.brandRed
  }
})

export default CustomInput

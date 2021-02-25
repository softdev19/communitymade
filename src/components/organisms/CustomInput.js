import React, { useState, useEffect } from 'react'
import { StyleSheet, View, TextInput, Text } from 'react-native'
import platform, { opacify } from '../../helpers/platform'
import _ from 'lodash'

function CustomInput({
  styleBlock,
  textInput,
  _value,
  _onChangeText,
  disabled,
  title,
  ...rest
}) {
  const [text, setText] = useState(_value)
  useEffect(() => {
    setText(_value === 'null' || !_value ? '' : _value)
  }, [_value])
  return(
    <View style={styles.row}>
      <Text style={styles.title}>{title}</Text>
      <View
        style={[
          styles.block,
          styleBlock,
          disabled && styles.disabled,
          _.size(text) && styles.selected
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
    width: '30%',
    color: platform.brandBlack,
    fontSize: 16,
    fontFamily: platform.fontBold,
  },
  block: {
    width: '70%',
    height: 45,
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
    fontFamily: platform.fontRegular,
    fontSize: 16,
    paddingHorizontal: 25
  },
  disabled: {
    backgroundColor: opacify(platform.brandGrey, 0.3)
  },
  selected: {
    borderColor: platform.brandBlack
  }
})

export default CustomInput

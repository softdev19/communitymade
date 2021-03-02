import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import RNPickerSelect from 'react-native-picker-select'
import platform, { opacify } from '../../helpers/platform'
import { Icon } from 'react-native-material-ui'

const inputWidth = (platform.deviceWidth - 70) * 0.6 + 4

function CustomPicker({ styleBlock, title, data, value, onValueChange }) {
  return(
    <View style={styles.row}>
      <Text style={styles.title}>{title}</Text>
      <View style={[styles.block, styleBlock]}>
        <RNPickerSelect
          onValueChange={onValueChange}
          value={value}
          items={data}
          style={{
            inputIOS: styles.inputIOS,
            inputAndroid: styles.inputAndroid,
            iconContainer: styles.iconContainer
          }}
          useNativeAndroidPickerStyle={false}
          Icon={() => (
            <Icon name="arrow-drop-down" size={32} />
          )}
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
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16
  },
  inputIOS: {
    height: 36,
    width: inputWidth - 20
  },
  inputAndroid: {
    color: platform.brandBlack,
    height: 36,
    width: inputWidth - 20
  },
  iconContainer: {
    top: 2
  }
})

export default CustomPicker

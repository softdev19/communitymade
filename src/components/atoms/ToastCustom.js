import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Toast from 'react-native-toast-message'
import platform from '../../helpers/platform'

export default function ToastCustom({ name }) {
  const toastConfig = {
    error: ({ text1, ...rest }) => (
      <View style={styles.container}>
        <Text style={styles.title}>{text1}</Text>
      </View>
    )
  };
  return (
    <Toast config={toastConfig} ref={(ref) => Toast.setRef(ref)} />
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    minHeight: 60,
    width: '90%',
    borderRadius: 6,
    backgroundColor: platform.defaultBackgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderWidth: 1,
    borderColor: platform.brandRedDark,
    ...platform.shadow
  },
  title: {
    color: platform.brandBlack,
    fontSize: 12,
    fontFamily: platform.fontMedium
  }
})

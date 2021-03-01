import React from 'react'
import { StyleSheet, Text } from 'react-native'
import platform from '../../helpers/platform'

export default function TabLabel({ name, focused }) {
  return (
    <Text style={[styles.label, focused && styles.focused]}>{name}</Text>
  )
}

const styles = StyleSheet.create({
  label: {
    color: platform.inactiveTintColor,
    fontSize: 13,
    fontFamily: platform.fontRegular
  },
  focused: {
    fontFamily: platform.fontBold
  }
})

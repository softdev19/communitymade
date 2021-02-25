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
    marginBottom: 6,
    color: platform.inactiveTintColor,
    fontSize: 12,
    fontFamily: platform.fontSemiBold
  },
  focused: {
    color: platform.activeTintColor
  }
})

import React from 'react'
import { StyleSheet, Image } from 'react-native'

export default function BackIcon() {
  return (
    <Image
      source={{ uri: 'arrow_left_black' }}
      style={styles.icon}
    />
  )
}

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
    left: 16
  }
})

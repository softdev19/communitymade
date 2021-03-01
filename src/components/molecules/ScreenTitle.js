import React from 'react'
import { StyleSheet, Text } from 'react-native'
import platform from '../../helpers/platform'

function ScreenTitle({ title }) {
  return(
    <Text style={styles.title}>{title}</Text>
  )
}

const styles = StyleSheet.create({
  title: {
    color: platform.brandBlack,
    fontSize: 18,
    fontFamily: platform.fontRegular,
    textAlign: 'center'
  }
})

export default ScreenTitle

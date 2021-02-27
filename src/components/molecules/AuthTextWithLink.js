import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import platform from '../../helpers/platform'

function AuthTextWithLink({ leftText, rightText, onPress }) {
  return(
    <View style={styles.row}>
      <Text style={styles.title}>{leftText}</Text>
      <Text style={styles.link} onPress={onPress}>{rightText}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: 35
  },
  title: {
    width: 170,
    color: platform.brandBlack,
    fontSize: 14,
    fontFamily: platform.fontMedium
  },
  link: {
    width: 120,
    paddingVertical: 5,
    paddingRight: 0,
    paddingLeft: 16,
    color: platform.brandBlue,
    fontSize: 14,
    fontFamily: platform.fontMedium,
    textDecorationLine: 'underline',
    textAlign: 'right'
  }
})

export default AuthTextWithLink

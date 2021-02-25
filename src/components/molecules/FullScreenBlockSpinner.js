import React from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import platform, { opacify } from '../../helpers/platform'

const Blocker = ({ color = platform.brandLight, transparent }) => (
  <View style={[styles.main, transparent && styles.transparent]}>
    <ActivityIndicator size="large" color={color} />
  </View>
)

const FullScreenBlockSpinner = ({ show = false, children, uiBlock }) => {
  if (children && !uiBlock) return children
  if (children && uiBlock) {
    return (
      <React.Fragment>
        {children}
        <Blocker />
      </React.Fragment>
    )
  }
  if (!show) return null
  return <Blocker color={platform.brandSuccess} transparent />
}

const styles = StyleSheet.create({
  main: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: opacify(platform.brandBlack, 0.7),
    justifyContent: 'center',
    alignItems: 'center'
  },
  transparent: {
    backgroundColor: 'transparent'
  }
})

const mapStateToProps = ({ appFlow }) => {
  return {
    uiBlock: appFlow.uiBlock
  }
}

export default connect(mapStateToProps)(FullScreenBlockSpinner)

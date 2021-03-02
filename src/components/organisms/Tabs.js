import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import platform from '../../helpers/platform'
import { useTranslation } from 'react-i18next'

function Tabs({ children, activeTab, setActiveTab }) {
  const { t } = useTranslation('settings')
  return(
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity
          style={[
            styles.btn,
            activeTab === 0 && styles.btnActive,
            styles.firstBtn
          ]}
          onPress={() => setActiveTab(0)}
        >
          <Text>{t('skills')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btn, activeTab === 1 && styles.btnActive]}
          onPress={() => setActiveTab(1)}
        >
          <Text>{t('address')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btn, activeTab === 2 && styles.btnActive]}
          onPress={() => setActiveTab(2)}
        >
          <Text>{t('bank info')}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.block}>
        {children}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20
  },
  row: {
    flexDirection: 'row',
    height: 30,
    paddingLeft: 50,
    bottom: -1,
    zIndex: 1
  },
  btn: {
    borderWidth: 1,
    backgroundColor: platform.defaultBackgroundColor,
    paddingHorizontal: 5,
    borderLeftWidth: 0
  },
  firstBtn: {
    borderLeftWidth: 1
  },
  btnActive: {
    borderBottomWidth: 0
  },
  block: {
    width: platform.deviceWidth - 32,
    flex: 1,
    alignSelf: 'center',
    borderWidth: 1,
    paddingBottom: 20
  }
})

export default Tabs

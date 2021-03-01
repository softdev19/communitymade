import React from 'react'
import { StyleSheet, Text } from 'react-native'
import platform from '../../helpers/platform'
import { useTranslation } from 'react-i18next'

function CompanyTitle() {
  const { t } = useTranslation('common')
  return(
    <>
      <Text style={styles.title}>{t('paskho')}</Text>
      <Text style={styles.title}>{t('community made')}</Text>
    </>
  )
}

const styles = StyleSheet.create({
  title: {
    color: platform.brandBlack,
    fontSize: 28,
    fontFamily: platform.fontMedium,
    lineHeight: 42,
    textAlign: 'center'
  }
})

export default CompanyTitle

import React, { useState } from 'react'
import { StyleSheet, Text, View, SectionList } from 'react-native'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'
import platform from '../helpers/platform'
import _ from 'lodash'
import moment from 'moment'

import CompanyTitle from '../components/molecules/CompanyTitle'
import ScreenTitle from '../components/molecules/ScreenTitle'
import OrderItem from '../components/organisms/OrderItem'
import Spacer from '../components/atoms/Spacer'

function OrderDetailsScreen({ navigation, route }) {
  const { order } = route.params
  const { t } = useTranslation(['order-details', 'common'])
  return (
    <View style={styles.container}>
      <View style={styles.header} />
      <CompanyTitle />
      <Spacer />
      <ScreenTitle title={t('active work')} />
      <Spacer size="XS" />
      <View style={styles.row}>
        <Text style={styles.title}>{t('amount earned')}</Text>
        <Text style={styles.subtitle}>${'30'}</Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    height: platform.topSpace + 20
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: platform.brandBlack,
    fontSize: 13,
    fontFamily: platform.fontBold,
  },
  subtitle: {
    color: platform.brandBlack,
    fontSize: 13,
    fontFamily: platform.fontRegular,
    paddingLeft: 5
  },
})

const mapStateToProps = ({}) => {
  return {}
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetailsScreen)

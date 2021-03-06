import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import platform from '../../helpers/platform'
import { useTranslation } from 'react-i18next'

function OrderNewDetailsItem({
  task_name,
  end_date,
  payment,
  totalQty,
  est_time,
  unclaimedQty,
  minQty,
  maxQty
}) {
  const { t } = useTranslation(['orders', 'common'])
  const _payment = `$${payment}/${t('common:per')}`
  const _estTime = `${est_time} ${t('common:min')}`
  return(
    <View style={styles.container}>

      <View style={styles.row}>
        <Text style={styles.title}>{t('task name')}</Text>
        <Text style={styles.subtitle}>{task_name}</Text>
      </View>

      <View style={styles.row}>
        <View style={styles.row}>
          <Text style={styles.title}>{t('end date')}</Text>
          <Text style={styles.subtitle}>{end_date}</Text>
        </View>
        <View style={[styles.row, styles.leftCol]}>
          <Text style={styles.title}>
            {t('payment')}
          </Text>
          <Text style={styles.subtitle}>{_payment}</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.col}>
          <View style={styles.row}>
            <Text style={styles.title}>
              {t('total quantity')}
            </Text>
            <Text style={styles.subtitle}>{totalQty}</Text>
          </View>
        </View>
        <View style={[styles.row, styles.leftCol]}>
          <Text style={styles.title}>
            {t('est time')}
          </Text>
          <Text style={styles.subtitle}>{_estTime}</Text>
        </View>
      </View>

      <View style={styles.row}>
        <Text style={styles.title}>
          {t('unclaimed quantity')}
        </Text>
        <Text style={styles.subtitle}>{unclaimedQty}</Text>
      </View>

      <View style={styles.row}>
        <View style={styles.col}>
          <View style={styles.row}>
            <Text style={styles.title}>
              {t('min quantity')}
            </Text>
            <Text style={styles.subtitle}>{minQty}</Text>
          </View>
        </View>
        <View style={[styles.row, styles.leftCol]}>
          <Text style={styles.title}>
            {t('max quantity')}
          </Text>
          <Text style={styles.subtitle}>{maxQty}</Text>
        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: platform.deviceWidth - 32,
    alignSelf: 'center',
    borderWidth: 1,
    padding: 16,
    marginBottom: 20,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    color: platform.brandBlack,
    fontSize: 13,
    fontFamily: platform.fontBold,
    paddingBottom: 5
  },
  subtitle: {
    color: platform.brandBlack,
    fontSize: 13,
    fontFamily: platform.fontRegular,
    paddingBottom: 5,
    paddingLeft: 10
  },
  col: {
    flex: 1
  },
  leftCol: {
    flex: 0
  }
})

export default OrderNewDetailsItem

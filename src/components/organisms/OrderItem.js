import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import platform from '../../helpers/platform'
import { useTranslation } from 'react-i18next'
import { Button } from 'react-native-material-ui'

function OrderItem({
  task_name,
  end_date,
  payment,
  claimed,
  completed,
  remaining,
  est_time,
  onPress
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
            {t(est_time ? 'est time' : 'payment')}
          </Text>
          <Text style={styles.subtitle}>{est_time ? _estTime : _payment}</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.col}>
          <View style={styles.row}>
            <Text style={styles.title}>
              {t(claimed ? 'claimed' : 'remaining')}
            </Text>
            <Text style={styles.subtitle}>{claimed || remaining}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.title}>
              {t(completed ? 'completed' : 'payment')}
            </Text>
            <Text style={styles.subtitle}>
              {completed || _payment}
            </Text>
          </View>
        </View>
        <Button
          raised
          style={{ text: styles.btnTitle }}
          upperCase={false}
          text={t('view details')}
          onPress={onPress}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: platform.deviceWidth - 32,
    alignSelf: 'center',
    borderWidth: 1,
    padding: 16,
    marginBottom: 20
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
  },
  btnTitle: {
    fontSize: 12,
    fontFamily: platform.fontMedium
  }
})

export default OrderItem

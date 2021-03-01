import React, { useState } from 'react'
import { StyleSheet, Text, View, SectionList } from 'react-native'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'
import platform from '../helpers/platform'
import _ from 'lodash'
import moment from 'moment'

import CompanyTitle from '../components/molecules/CompanyTitle'
import OrderItem from '../components/organisms/OrderItem'

function OrdersScreen({ navigation }) {
  const { t } = useTranslation(['orders', 'common'])
  const dataActive = [
    { name: "Serene Black Women's Pant", end_date: "04-01-2021", claimed: "10", completed: "2", payment: "15" }
  ]
  const dataAvailable = [
    { name: "Serene Black Women's Pant", end_date: "03-21-2021", remaining: "50", est_time: "90", payment: "15" },
    { name: "Serene Black Women's Pant", end_date: "03-21-2021", remaining: "50", est_time: "90", payment: "15" },
    { name: "Serene Black Women's Pant", end_date: "03-21-2021", remaining: "50", est_time: "90", payment: "15" },
  ]
  const data = [
    { title: t('your active orders'), data: dataActive },
    { title: t('available orders'), data: dataAvailable }
  ]
  return (
    <View style={styles.container}>
      <View style={styles.header} />
      <CompanyTitle />
      <SectionList
        sections={data}
        keyExtractor={(item, index) => String(index)}
        renderItem={({ item }) => {
          return (
            <OrderItem
              task_name={item.name}
              end_date={moment(item.end_date).format('MM/DD/YY')}
              payment={item.payment}
              claimed={item.claimed}
              completed={item.completed}
              remaining={item.remaining}
              est_time={item.est_time}
              onPress={() => {}}
            />
          )
        }}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionTitle}>{title}</Text>
        )}
      />
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
  sectionTitle: {
    textAlign: 'center',
    color: platform.brandBlack,
    fontSize: 18,
    fontFamily: platform.fontRegular,
    paddingVertical: 16,
    backgroundColor: platform.defaultBackgroundColor
  }
})

const mapStateToProps = ({}) => {
  return {}
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(OrdersScreen)

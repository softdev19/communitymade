import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'
import platform from '../helpers/platform'
import _ from 'lodash'
import moment from 'moment'
import { Button } from 'react-native-material-ui'
import InputScrollView from 'react-native-input-scroll-view'

import CompanyTitle from '../components/molecules/CompanyTitle'
import ScreenTitle from '../components/molecules/ScreenTitle'
import OrderNewDetailsItem from '../components/organisms/OrderNewDetailsItem'
import Spacer from '../components/atoms/Spacer'
import ClaimQuantity from '../components/organisms/ClaimQuantity'

function OrderNewDetailsScreen({ navigation, route }) {
  const { order } = route.params
  const { t } = useTranslation(['order-new-details', 'common'])
  const [quantity, setQuantity] = useState(order?.minQty)
  const onPressPDF = () => {

  }
  const onPressVideo = () => {

  }
  const onPressClaim = () => {
    navigation.navigate('OrderSuccess', { order, quantity })
  }
  return (
    <View style={styles.container}>
      <View style={styles.header} />
      <CompanyTitle />
      <InputScrollView
        keyboardOffset={platform.topSpace ? platform.topSpace + 20 : 40}
        keyboardShouldPersistTaps="always"
      >
        <Spacer />
        <ScreenTitle title={t('Tasks details')} />
        <Spacer />
        <OrderNewDetailsItem
          task_name={order.name}
          end_date={moment(order.end_date).format('MM/DD/YY')}
          payment={order.payment}
          totalQty={order.totalQty}
          est_time={order.est_time}
          unclaimedQty={order.unclaimedQty}
          minQty={order.minQty}
          maxQty={order.maxQty}
        />
        <Text style={styles.text}>{t('claim text')}</Text>
        <Spacer />
        <Button
          raised
          upperCase={false}
          style={{ container: styles.btn }}
          text={t('view pdf')}
          onPress={onPressPDF}
        />
        <Button
          raised
          upperCase={false}
          style={{ container: styles.btn }}
          text={t('view video')}
          onPress={onPressVideo}
        />
        <Spacer />
        <ClaimQuantity
          minQty={order.minQty}
          maxQty={order.maxQty}
          quantity={quantity}
          setQuantity={setQuantity}
          onPressClaim={onPressClaim}
        />
        <View style={styles.footer} />
      </InputScrollView>
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
  text: {
    color: platform.brandBlack,
    fontSize: 12,
    fontFamily: platform.fontRegular,
    paddingHorizontal: 16,
    letterSpacing: 0.4,
    lineHeight: 14
  },
  btn: {
    marginHorizontal: 32,
    marginBottom: 10
  },
  footer: {
    height: 100
  }
})

const mapStateToProps = ({}) => {
  return {}
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(OrderNewDetailsScreen)

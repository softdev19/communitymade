import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'
import platform from '../helpers/platform'
import { CommonActions } from '@react-navigation/native';
import { Header } from '../components';
import _ from 'lodash'
import moment from 'moment'
import { Button } from 'react-native-material-ui'
import InputScrollView from 'react-native-input-scroll-view'

import CompanyTitle from '../components/molecules/CompanyTitle'
import ScreenTitle from '../components/molecules/ScreenTitle'
import Spacer from '../components/atoms/Spacer'
import OrderSuccessItem from '../components/organisms/OrderSuccessItem'

function OrderSuccessScreen({ navigation, route }) {
  const { order, quantity } = route.params
  const { t } = useTranslation(['order-success', 'common'])
  const onPressStart = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          { name: 'Home' }
        ],
      })
    );
  }
  const onPressCancel = () => {
    navigation.goBack()
  }
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      {/* <View style={styles.header} /> */}
      <Header
        title={'Success !'}
        onBackPress={goBack}
      />
      {/* <CompanyTitle /> */}
      <InputScrollView
        keyboardOffset={platform.topSpace ? platform.topSpace + 20 : 40}
        keyboardShouldPersistTaps="always"
      >
        <Spacer />
        {/* <ScreenTitle title={t('success')} /> */}

        <Spacer size="XS" />
        <Text style={styles.text}>{t('thank you')}</Text>

        <Spacer size="S" />
        <ScreenTitle title={t('task details')} />
        <Spacer />
        <OrderSuccessItem
          task_name={order.name}
          end_date={moment(order.end_date).format('MM/DD/YY')}
          payment={order.payment}
          claimedQty={quantity}
          est_time={order.est_time}
        />
        <Spacer size="S" />
        <Button
          raised
          upperCase={false}
          style={{ container: styles.btn }}
          text={t('start task')}
          onPress={onPressStart}
        />

        {/* <Spacer />
        <ScreenTitle title={t('didnt sign up')} />
        <Spacer size="S" />
        <Button
          raised
          upperCase={false}
          style={{ container: styles.btn }}
          text={t('common:cancel')}
          onPress={onPressCancel}
        /> */}

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
    paddingHorizontal: 32,
    color: platform.brandBlack,
    fontSize: 13,
    fontFamily: platform.fontRegular,
    letterSpacing: 0.4,
    lineHeight: 18
  },
  btn: {
    width: platform.deviceWidth - 100,
    alignSelf: 'center'
  },
  footer: {
    height: 100
  }
})

const mapStateToProps = ({}) => {
  return {}
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(OrderSuccessScreen)

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
import OrderItem from '../components/organisms/OrderItem'
import Spacer from '../components/atoms/Spacer'
import CustomInput from '../components/organisms/CustomInput'

function OrderDetailsScreen({ navigation, route }) {
  const { order } = route.params
  const { t } = useTranslation(['order-details', 'common'])
  const [message, setMessage] = useState('')
  const onPressPDF = () => {

  }
  const onPressVideo = () => {

  }
  const onPressCompleted = () => {

  }
  const onPressMessage = () => {

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
        <ScreenTitle title={t('active work')} />
        <Spacer size="XS" />
        <View style={styles.row}>
          <Text style={styles.title}>{t('amount earned')}</Text>
          <Text style={styles.subtitle}>${'30'}</Text>
        </View>
        <Spacer />
        <OrderItem
          isDetails
          task_name={order.name}
          end_date={moment(order.end_date).format('MM/DD/YY')}
          payment={order.payment}
          claimed={order.claimed}
          completed={order.completed}
          remaining={order.remaining}
          est_time={order.est_time}
        />
        <Button
          raised
          style={{ container: styles.btn }}
          text={t('view pdf')}
          onPress={onPressPDF}
        />
        <Button
          raised
          style={{ container: styles.btn }}
          text={t('view video')}
          onPress={onPressVideo}
        />
        <Button
          raised
          style={{ container: styles.btn }}
          text={t('mark completed')}
          onPress={onPressCompleted}
        />
        <Spacer size="XS" />
        <ScreenTitle title={t('questions')} />
        <Spacer size="S" />
        <CustomInput
          _value={message}
          _onChangeText={text => setMessage(text)}
          multiline
          numberOfLines={5}
          styleContainer={styles.inputContainer}
          styleBlock={styles.input}
        />
        <Spacer size="S" />
        <Button
          raised
          style={{ container: styles.smallBtn }}
          text={t('message paskho')}
          disabled={_.size(message) < 10}
          onPress={onPressMessage}
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
  btn: {
    marginHorizontal: 32,
    marginBottom: 10
  },
  inputContainer: {
    alignSelf: 'center'
  },
  input: {
    width: platform.deviceWidth - 32 - 32,
    height: null,
    minHeight: 36
  },
  footer: {
    height: 100
  },
  smallBtn: {
    width: 160,
    alignSelf: 'flex-end',
    marginRight: 32
  }
})

const mapStateToProps = ({}) => {
  return {}
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetailsScreen)

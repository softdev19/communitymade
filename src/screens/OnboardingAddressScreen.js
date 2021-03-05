import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'
import platform from '../helpers/platform'
import _ from 'lodash'
import { Button } from 'react-native-material-ui'

import CustomInput from '../components/organisms/CustomInput'
import Spacer from '../components/atoms/Spacer'
import CustomPicker from '../components/organisms/CustomPicker'
import CompanyTitle from '../components/molecules/CompanyTitle'
import ScreenTitle from '../components/molecules/ScreenTitle'

import { setUiBlock } from '../actions/appFlowActions'
import { updateUserInfo } from '../actions/auth'

function OnboardingAddressScreen({
  navigation,
  setUiBlock,
  updateUserInfo,
  user
}) {
  const { t } = useTranslation(['onboarding-address', 'common'])
  const {
    firstName,
    lastName,
    addressFirst,
    addressSecond,
    city,
    state,
    zip,
    phone
  } = user
  const handleUpdate = (key, value) => {
    updateUserInfo({...user, [key]: value})
  }
  const onPressContinue = async () => {
    try {
      setUiBlock(true)
      navigation.navigate('OnboardingSkills')
      setUiBlock(false)
    } catch (e) {
      setUiBlock(false)
      ShowError(e)
    }
  }
  return (
    <KeyboardAvoidingView
      behavior={platform.platform === 'ios' ? 'position' : 'height'}
      style={styles.container}
      contentContainerStyle={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <CompanyTitle />
          <Spacer size="M" />
          <ScreenTitle title={t('contact info')} />
          <Spacer size="M" />
          <View style={styles.inputs}>
            <CustomInput
              _value={firstName}
              title={t('firstName')}
              _onChangeText={text => handleUpdate('firstName', text)}
            />
            <Spacer size="M" />
            <CustomInput
              _value={lastName}
              title={t('lastName')}
              _onChangeText={text => handleUpdate('lastName', text)}
            />
            <Spacer size="M" />
            <CustomInput
              _value={addressFirst}
              title={t('address first')}
              _onChangeText={text => handleUpdate('addressFirst', text)}
            />
            <Spacer size="M" />
            <CustomInput
              _value={addressSecond}
              title={t('address second')}
              _onChangeText={text => handleUpdate('addressSecond', text)}
            />
            <Spacer size="M" />
            <CustomInput
              _value={city}
              title={t('city')}
              _onChangeText={text => handleUpdate('city', text)}
            />
            <Spacer size="M" />
            <CustomPicker
              title={t('state')}
              value={state}
              data={[
                { label: 'Brooklyn', value: 'brooklyn' },
                { label: 'Chikago', value: 'chikago' },
              ]}
              onValueChange={value => handleUpdate('state', value)}
            />
            <Spacer size="M" />
            <CustomInput
              _value={zip}
              title={t('zip')}
              _onChangeText={text => handleUpdate('zip', text)}
            />
            <Spacer size="M" />
            <CustomInput
              _value={phone}
              title={t('phone')}
              _onChangeText={text => handleUpdate('phone', text)}
            />
            <Spacer size="M" />
            <Button
              raised
              style={{ container: styles.btn }}
              text={t('common:continue')}
              onPress={onPressContinue}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputs: {
    paddingHorizontal: 35
  },
  btn: {
    width: 120,
    alignSelf: 'flex-end'
  }
})

const mapStateToProps = ({ auth }) => {
  return {
    user: auth?.user || {}
  }
}

const mapDispatchToProps = {
  setUiBlock,
  updateUserInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(OnboardingAddressScreen)

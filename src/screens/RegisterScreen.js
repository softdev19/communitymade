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
import AuthTextWithLink from '../components/molecules/AuthTextWithLink'

import { setUiBlock } from '../actions/appFlowActions'
import { checkEmail } from '../helpers/user'
import { updateUserInfo } from '../actions/auth'

function RegisterScreen({ navigation, setUiBlock, updateUserInfo, user }) {
  const { t } = useTranslation(['register', 'common'])
  const { firstName, lastName, email, password, pod } = user
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isValidEmail, setIsValidEmail] = useState(null)
  const handleUpdate = (key, value) => {
    updateUserInfo({...user, [key]: value})
  }
  const handleEmail = text => {
    const isValid = checkEmail(text)
    handleUpdate('email', text)
    setIsValidEmail(isValid)
  }
  const onPressRegister = async () => {
    try {
      setUiBlock(true)
      navigation.navigate('OnboardingAddress')
      setUiBlock(false)
    } catch (e) {
      setUiBlock(false)
      ShowError(e)
    }
  }
  const onPressLogin = () => {
    navigation.goBack()
  }
  const isValidPassword = password === confirmPassword
  const enabled =
    _.size(firstName) && _.size(lastName) && isValidEmail && _.size(password) > 5 && isValidPassword
  return (
    <KeyboardAvoidingView
      behavior={platform.platform === 'ios' ? 'position' : 'height'}
      style={styles.container}
      contentContainerStyle={styles.container}
      keyboardVerticalOffset={platform.platform === 'ios' && -100}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <CompanyTitle />
          <Spacer size="M" />
          <ScreenTitle title={t('create account')} />
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
              _value={email}
              title={t('email')}
              keyboardType="email-address"
              isError={isValidEmail === false}
              _onChangeText={handleEmail}
            />
            <Spacer size="M" />
            <CustomInput
              _value={password}
              isError={isValidPassword === false}
              secureTextEntry
              title={t('password')}
              _onChangeText={text => handleUpdate('password', text)}
            />
            <Spacer size="M" />
            <CustomInput
              _value={confirmPassword}
              isError={isValidPassword === false}
              secureTextEntry
              title={t('confirm password')}
              _onChangeText={text => setConfirmPassword(text)}
            />
            <Spacer size="M" />
            <CustomPicker
              title={t('pod')}
              value={pod}
              data={[
                { label: 'Brooklyn', value: 'brooklyn' },
                { label: 'Alabama', value: 'alabama' },
              ]}
              onValueChange={value => handleUpdate('pod', value)}
            />
            <Spacer size="M" />
            <Button
              raised
              style={{ container: styles.btn }}
              text={t('register')}
              disabled={!enabled}
              onPress={onPressRegister}
            />
            <Spacer size="L" />
          </View>
          <AuthTextWithLink
            leftText={t('already have account')}
            rightText={t('login')}
            onPress={onPressLogin}
          />
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
    width: 100,
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

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen)

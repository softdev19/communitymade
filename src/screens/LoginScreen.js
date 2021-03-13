import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
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
import CompanyTitle from '../components/molecules/CompanyTitle'
import AuthTextWithLink from '../components/molecules/AuthTextWithLink'

import { setUiBlock } from '../actions/appFlowActions'
import { checkEmail } from '../helpers/user'

function LoginScreen({ navigation, setUiBlock }) {
  const { t } = useTranslation(['login', 'common'])
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isValidEmail, setIsValidEmail] = useState(null)
  const handleEmail = text => {
    const isValid = checkEmail(text)
    setEmail(text)
    setIsValidEmail(isValid)
  }
  const onPressLogin = async () => {
    try {
      setUiBlock(true)
      navigation.navigate('OnboardingAddress')
      setUiBlock(false)
    } catch (e) {
      setUiBlock(false)
      ShowError(e)
    }
  }
  const onPressCreate = () => {
    navigation.navigate('Register')
  }
  const onPressReset = () => {
    navigation.navigate('ResetPassword')
  }
  const enabled = isValidEmail && _.size(password) > 5
  return (
    <KeyboardAvoidingView
      behavior={platform.platform === 'ios' ? 'position' : 'height'}
      style={styles.container}
      contentContainerStyle={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <CompanyTitle />
          <Spacer size="XL" />
          <View style={styles.inputs}>
            <CustomInput
              _value={email}
              title={t('email')}
              keyboardType="email-address"
              isError={isValidEmail === false}
              _onChangeText={handleEmail}
            />
            <Spacer size="L" />
            <CustomInput
              _value={password}
              secureTextEntry
              title={t('password')}
              _onChangeText={text => setPassword(text)}
            />
            <Spacer size="L" />
            <Button
              raised
              style={{ container: styles.btn }}
              text={t('login')}
              disabled={!enabled}
              onPress={onPressLogin}
            />
          </View>
          <Spacer size="L" />
          <AuthTextWithLink
            leftText={t('dont have account')}
            rightText={t('create account')}
            onPress={onPressCreate}
          />
          <AuthTextWithLink
            leftText={t('forgot password')}
            rightText={t('reset password')}
            onPress={onPressReset}
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

const mapStateToProps = ({}) => {
  return {}
}

const mapDispatchToProps = {
  setUiBlock
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)

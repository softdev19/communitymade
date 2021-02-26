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
import CustomPicker from '../components/organisms/CustomPicker'

import { setUiBlock } from '../actions/appFlowActions'
import { checkEmail } from '../helpers/user'

function RegisterScreen({ navigation, setUiBlock }) {
  const { t } = useTranslation(['register', 'common'])
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isValidEmail, setIsValidEmail] = useState(null)
  const [pod, setPod] = useState('')
  const handleEmail = text => {
    const isValid = checkEmail(text)
    setEmail(text)
    setIsValidEmail(isValid)
  }
  const onPressRegister = async () => {
    try {
      setUiBlock(true)

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
          <Text style={styles.title}>{t('common:paskho')}</Text>
          <Text style={styles.title}>{t('common:community made')}</Text>
          <Text style={styles.pageTitle}>{t('create account')}</Text>
          <Spacer size="M" />
          <View style={styles.inputs}>
            <CustomInput
              _value={firstName}
              title={t('firstName')}
              _onChangeText={text => setFirstName(text)}
            />
            <Spacer size="M" />
            <CustomInput
              _value={lastName}
              title={t('lastName')}
              _onChangeText={text => setLastName(text)}
            />
            <Spacer size="M" />
            <CustomInput
              _value={email}
              title={t('email')}
              isError={isValidEmail === false}
              _onChangeText={handleEmail}
            />
            <Spacer size="M" />
            <CustomInput
              _value={password}
              isError={isValidPassword === false}
              secureTextEntry
              title={t('password')}
              _onChangeText={text => setPassword(text)}
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
                { label: 'Chikago', value: 'chikago' },
              ]}
              onValueChange={value => setPod(value)}
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
          <View style={styles.row}>
            <Text style={styles.subtitle}>{t('already have account')}</Text>
            <Text style={styles.link} onPress={onPressLogin}>
              {t('login')}
            </Text>
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
  title: {
    color: platform.brandBlack,
    fontSize: 28,
    fontFamily: platform.fontMedium,
    lineHeight: 42
  },
  pageTitle: {
    color: platform.brandBlack,
    fontSize: 20,
    fontFamily: platform.fontRegular,
    marginTop: 24
  },
  inputs: {
    paddingHorizontal: 35
  },
  btn: {
    width: 100,
    alignSelf: 'flex-end'
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: 35
  },
  subtitle: {
    color: platform.brandBlack,
    fontSize: 14,
    fontFamily: platform.fontMedium
  },
  link: {
    padding: 5,
    color: platform.brandBlue,
    fontSize: 14,
    fontFamily: platform.fontMedium,
    textDecorationLine: 'underline',
    paddingLeft: 16
  }
})

const mapStateToProps = ({}) => {
  return {}
}

const mapDispatchToProps = {
  setUiBlock
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen)

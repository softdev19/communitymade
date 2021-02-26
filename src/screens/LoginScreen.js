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

      setUiBlock(false)
    } catch (e) {
      setUiBlock(false)
      ShowError(e)
    }
  }
  const onPressCreate = () => {

  }
  const onPressReset = () => {

  }
  const enabled = isValidEmail && _.size(password) > 5
  return (
    <KeyboardAvoidingView
      behavior={platform.platform === 'ios' ? 'position' : 'height'}
      style={styles.container}
      contentContainerStyle={styles.container}
      keyboardVerticalOffset={platform.isIphoneX && -100}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.title}>{t('paskho')}</Text>
          <Text style={styles.title}>{t('community made')}</Text>
          <Spacer size="XL" />
          <View style={styles.inputs}>
            <CustomInput
              _value={email}
              title={t('email')}
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
            <Spacer size="L" />
            <View style={styles.row}>
              <Text style={styles.subtitle}>{t('dont have account')}</Text>
              <Text style={styles.link} onPress={onPressCreate}>
                {t('create account')}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.subtitle}>{t('forgot password')}</Text>
              <Text style={styles.link} onPress={onPressReset}>
                {t('reset password')}
              </Text>
            </View>
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
  inputs: {
    paddingHorizontal: 35
  },
  btn: {
    width: 100,
    alignSelf: 'flex-end'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
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
    textDecorationLine: 'underline'
  }
})

const mapStateToProps = ({}) => {
  return {}
}

const mapDispatchToProps = {
  setUiBlock
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)

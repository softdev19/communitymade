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
import { Button } from 'react-native-material-ui';

import CustomInput from '../components/organisms/CustomInput'
import Spacer from '../components/atoms/Spacer'

import { setUiBlock } from '../actions/appFlowActions'

function LoginScreen({ navigation, setUiBlock }) {
  const { t } = useTranslation(['login', 'common'])
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const onPressLogin = async () => {
    try {
      setUiBlock(true)

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
              _onChangeText={text => setEmail(text)}
            />
            <Spacer size="L" />
            <CustomInput
              _value={password}
              title={t('password')}
              _onChangeText={text => setPassword(text)}
            />
            <Spacer size="L" />
            <Button
              raised
              style={{ container: styles.btn }}
              text={t('login')}
              onPress={onPressLogin}
            />
            <Spacer size="L" />
            <View style={styles.row}>
              <Text style={styles.subtitle}>{t('dont have account')}</Text>
              <Text style={styles.link}>{t('create account')}</Text>
            </View>
            <Spacer size="S" />
            <View style={styles.row}>
              <Text style={styles.subtitle}>{t('forgot password')}</Text>
              <Text style={styles.link}>{t('reset password')}</Text>
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
    color: platform.brandBlue,
    fontSize: 14,
    fontFamily: platform.fontMedium
  }
})

const mapStateToProps = ({}) => {
  return {}
}

const mapDispatchToProps = {
  setUiBlock
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)

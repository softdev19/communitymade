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

function OnboardingAddressScreen({ navigation, setUiBlock }) {
  const { t } = useTranslation(['onboarding-address', 'common'])
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [addressFirst, setAddressFirst] = useState('')
  const [addressSecond, setAddressSecond] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState(null)
  const [zip, setZip] = useState('')
  const [phone, setPhone] = useState('')
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
              _value={addressFirst}
              title={t('address first')}
              _onChangeText={text => setAddressFirst(text)}
            />
            <Spacer size="M" />
            <CustomInput
              _value={addressSecond}
              title={t('address second')}
              _onChangeText={text => setAddressSecond(text)}
            />
            <Spacer size="M" />
            <CustomInput
              _value={city}
              title={t('city')}
              _onChangeText={text => setCity(text)}
            />
            <Spacer size="M" />
            <CustomPicker
              title={t('state')}
              value={state}
              data={[
                { label: 'Brooklyn', value: 'brooklyn' },
                { label: 'Chikago', value: 'chikago' },
              ]}
              onValueChange={value => setState(value)}
            />
            <Spacer size="M" />
            <CustomInput
              _value={zip}
              title={t('zip')}
              _onChangeText={text => setZip(text)}
            />
            <Spacer size="M" />
            <CustomInput
              _value={phone}
              title={t('phone')}
              _onChangeText={text => setPhone(text)}
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

const mapStateToProps = ({}) => {
  return {}
}

const mapDispatchToProps = {
  setUiBlock
}

export default connect(mapStateToProps, mapDispatchToProps)(OnboardingAddressScreen)

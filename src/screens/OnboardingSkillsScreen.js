import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'
import platform from '../helpers/platform'
import _ from 'lodash'
import { Button, Checkbox } from 'react-native-material-ui'

import Spacer from '../components/atoms/Spacer'
import CompanyTitle from '../components/molecules/CompanyTitle'
import ScreenTitle from '../components/molecules/ScreenTitle'

import { setUiBlock } from '../actions/appFlowActions'
import { dataSkills } from '../constants/types'

function OnboardingSkillsScreen({ navigation, setUiBlock }) {
  const { t } = useTranslation(['onboarding-skills', 'common'])
  const [skills, setSkills] = useState([])
  const onPressContinue = async () => {
    try {
      setUiBlock(true)
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }]
      })
      setUiBlock(false)
    } catch (e) {
      setUiBlock(false)
      ShowError(e)
    }
  }
  return (
    <View style={styles.container}>
      <CompanyTitle />
      <Spacer size="M" />
      <ScreenTitle title={t('choose skills')} />
      <Spacer size="M" />
      {_.map(dataSkills, (item, key) => {
        const checkedIndex = _.indexOf(skills, item)
        return (
          <View style={styles.checkbox} key={key}>
            <Checkbox
              label={item}
              value={item}
              checked={checkedIndex > -1}
              onCheck={bool => {
                if (checkedIndex > -1) {
                  const newSkills = [
                    ...skills.slice(0, checkedIndex),
                    ...skills.slice(checkedIndex + 1)
                  ]
                  setSkills(newSkills)
                } else {
                  setSkills([...skills, item])
                }
              }}
            />
          </View>
        )
      })}
      <Spacer size="M" />
      <Button
        raised
        style={{ container: styles.btn }}
        text={t('common:continue')}
        disabled={_.size(skills) === 0}
        onPress={onPressContinue}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btn: {
    width: 120,
    alignSelf: 'center'
  },
  checkbox: {
    width: '100%',
    height: 40
  }
})

const mapStateToProps = ({}) => {
  return {}
}

const mapDispatchToProps = {
  setUiBlock
}

export default connect(mapStateToProps, mapDispatchToProps)(OnboardingSkillsScreen)

import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'
import platform from '../helpers/platform'
import _ from 'lodash'
import { Button, Checkbox } from 'react-native-material-ui'
import InputScrollView from 'react-native-input-scroll-view'

import CompanyTitle from '../components/molecules/CompanyTitle'
import ScreenTitle from '../components/molecules/ScreenTitle'
import Spacer from '../components/atoms/Spacer'
import Tabs from '../components/organisms/Tabs'

import { dataSkills } from '../constants/types'

function SettingsScreen({ navigation }) {
  const { t } = useTranslation(['settings', 'common'])
  const [activeTab, setActiveTab] = useState(0)
  const [skills, setSkills] = useState([])
  const onPressContinueSkills = () => {

  }
  return (
    <View style={styles.container}>
      <View style={styles.header} />
      <CompanyTitle />
      <InputScrollView>
        <Spacer />
        <ScreenTitle title={t('settings')} />
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab}>
          {activeTab === 0 && (
            <>
              <Spacer />
              <ScreenTitle title={t('choose skills')} />
              <Spacer />
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
              <Spacer />
              <Button
                raised
                style={{ container: styles.btn }}
                text={t('common:submit')}
                disabled={_.size(skills) === 0}
                onPress={onPressContinueSkills}
              />
            </>
          )}
        </Tabs>
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
  btn: {
    width: 100,
    height: 30,
    alignSelf: 'center'
  },
  checkbox: {
    width: '100%',
    height: 40,
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

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen)

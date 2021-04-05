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
import { userSignup } from '../thunk';
import ShowError from '../helpers/ShowError';

function OnboardingSkillsScreen({ navigation, setUiBlock, route, userSignup, allSkills }) {
  const { t } = useTranslation(['onboarding-skills', 'common'])
  const [skills, setSkills] = useState([])
  const onPressContinue = async () => {
    try {
      setUiBlock(true)
      let { userData } = route.params;
      userData.skills = [];
      console.log('skills',skills)
      skills.map(skill => userData.skills.push(parseInt(skill?.id)))
      console.log('userData', JSON.stringify(userData));
      userSignup(userData, navigation);

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
      {_.map(allSkills, (item, key) => {
          const checkedIndex =  skills?.findIndex(skill => skill?.id == item?.id)
          { return allSkills ? (
             <View style={styles.checkbox} key={key}>
               <Checkbox
                 label={item?.name}
                 value={item?.name}
                 checked={checkedIndex > -1}
                 onCheck={bool => {
                   console.log('checkedIndex',checkedIndex)
                   console.log('bool',bool)
                   if (checkedIndex > -1) {
                     // remove from list
                         const newSkills = [
                       ...skills?.slice(0, checkedIndex),
                       ...skills?.slice(checkedIndex + 1)
                     ]
                     console.log('newSkills remove', newSkills)
                     setSkills(newSkills)
                   } else {
                     // add to list
                     let newSkills = [];
                     let index = allSkills?.findIndex(skill => skill?.id == item?.id);
                     console.log('allSkills[item?.id - 1].id', allSkills[index].id)
                     newSkills.push({id: allSkills[index].id})
                     console.log('newSkills add',newSkills)
                     skills? setSkills([...skills, ...newSkills]) : setSkills([...newSkills])
                   }
                 }}
               />
            </View>) : null
           }
         })
      }
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

const mapStateToProps = ({workOrders}) => {
  let { allSkills } = workOrders;
  return {
    allSkills
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUiBlock: (value) => dispatch(setUiBlock(value)),
    userSignup: (data, navigation) => dispatch(userSignup(data, navigation)),
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(OnboardingSkillsScreen)

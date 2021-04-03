import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'
import platform from '../helpers/platform'
import _ from 'lodash'
import { Button, Checkbox } from 'react-native-material-ui'
import InputScrollView from 'react-native-input-scroll-view'
import { useDispatch } from 'react-redux'

import CustomInput from '../components/organisms/CustomInput'
import CompanyTitle from '../components/molecules/CompanyTitle'
import ScreenTitle from '../components/molecules/ScreenTitle'
import Spacer from '../components/atoms/Spacer'
import Tabs from '../components/organisms/Tabs'
import { getAllSkills, getSkillsById, updateProfile } from '../thunk';
import { setUiBlock } from '../actions';

import { dataSkills } from '../constants/types'

function SettingsScreen({ navigation, getAllSkills, updateProfile, setUiBlock, user, allSkills, userSkills }) {
  const { t } = useTranslation(['settings', 'common'])
  const [activeTab, setActiveTab] = useState(0)
  const [skills, setSkills] = useState(userSkills)
  const [firstAddress, setFirstAddress] = useState(user?.user?.address1)
  const [secondAddress, setSecondAddress] = useState(user?.user?.address2)
  const [city, setCity] = useState(user?.user?.city)
  const [state, setState] = useState(user?.user?.state)
  const [zip, setZip] = useState(user?.user?.zip)
  const [phone, setPhone] = useState(user?.user?.phone)
  const onPressContinueSkills = () => {
    console.log('skills', skills)
  }

   useEffect(() => {
    setUiBlock(true),
    getAllSkills()
    console.log('allSkills', allSkills)
    console.log('userSkills', userSkills)
    }, [])

  const onPressSubmit = () => {
      updateProfile({
        userId: user?.user?.id,
        data: {
          phone: 111111111,
          firstName: 'Faisal',
          skills: [1,2]
        }
      })
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
              {_.map(allSkills, (item, key) => {
               // const checkedIndex = _.indexOf(skills, item)
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
              <Spacer />
              {/* <Button
                raised
                style={{ container: styles.btn }}
                text={t('common:submit')}
                disabled={_.size(skills) === 0}
                onPress={onPressSubmit}
              /> */}
            </>
          )}
        {activeTab === 1 && (
            <>
              <Spacer />
              <ScreenTitle title={'User Address'} />
              <Spacer />
              
              <CustomInput
                _value={firstAddress}
                title={t('onboarding-address:address first')}
                _onChangeText={text => setFirstAddress(text)}
                styleContainer={{ justifyContent: 'space-around' }}
              />
              <Spacer />
              <CustomInput
                _value={secondAddress}
                title={t('onboarding-address:address second')}
                _onChangeText={text => setSecondAddress(text)}
                styleContainer={{ justifyContent: 'space-around' }}
              />
              <Spacer />
              <CustomInput
                _value={city}
                title={t('onboarding-address:city')}
                _onChangeText={text => setCity(text)}
                styleContainer={{ justifyContent: 'space-around' }}
              />
              <Spacer />
              <CustomInput
                _value={state}
                title={t('onboarding-address:state')}
                _onChangeText={text => setState(text)}
                styleContainer={{ justifyContent: 'space-around' }}
              />
              <Spacer />
              <CustomInput
                _value={zip}
                title={t('onboarding-address:zip')}
                _onChangeText={text => setZip(text)}
                styleContainer={{ justifyContent: 'space-around' }}
              />
              <Spacer />
              <CustomInput
                _value={phone}
                title={t('onboarding-address:phone')}
                _onChangeText={text => setPhone(text)}
                styleContainer={{ justifyContent: 'space-around' }}
              />

              <Spacer />
              {/* <Button
                raised
                style={{ container: styles.btn }}
                text={t('common:submit')}
                disabled={_.size(skills) === 0}
                onPress={onPressSubmit}
              /> */}
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

const mapStateToProps = ({ auth, workOrders }) => {
  let { activeOrders, availableOrders, activeWorkOrdersFetchSuccess, availableWorkOrdersFetchSuccess, allSkills } = workOrders;
  let { user } = auth;
  let { skills } = user?.user;
  let userSkills = skills;
  return {
    user,
    activeOrders,
    availableOrders,
    activeWorkOrdersFetchSuccess,
    availableWorkOrdersFetchSuccess,
    allSkills,
    userSkills
  }
}

// const mapDispatchToProps = {
//   getAllSkills,
//   setUiBlock
// }

const mapDispatchToProps = (dispatch) => {
  return {
    updateProfile: (data) => dispatch(updateProfile(data)),
    setUiBlock: (value) => dispatch(setUiBlock(value)),
    getAllSkills:() => dispatch(getAllSkills()),
    getSkillsById:(id) => dispatch(getSkillsById(id)),
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen)

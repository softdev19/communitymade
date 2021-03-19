import React from 'react';
import {
  Image,
  ImageBackground,
  Keyboard,
  Platform,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  View,
  Text
} from 'react-native';
import { CommonActions } from '@react-navigation/native';
import _ from 'lodash'
import AntDesign from 'react-native-vector-icons/AntDesign';
import platform from '../../helpers/platform'
import {
  COLORS,
  commonStyle as cs,
  GetOptimalHieght,
  GetOptimalWidth,
  images,
  scaledFontSize,
} from '../../common';
import Button from '../../components/button';
import InputBox from '../../components/inputBox';
import ValuePickerModal from '../../components/valuePickerModal';
import { connect } from 'react-redux'
import { setUiBlock } from '../../actions'
import { userSignup } from '../../thunk';
import US_STATES from '../../helpers/US_States';
import style from './styles';

const commonInputProps = {
  style: cs.input,
  autoCorrect: false,
  returnKeyType: 'next',
  placeholderTextColor: COLORS.NAMECOLORNEW,
  selectionColor: COLORS.NAMECOLORNEW,
  maxLength: 60,
  autoCapitalize: 'none',
};

let IS_TESTING = false;
const userNameMaxLength =  60;  // globalconstants.userNameIdMaxLength;
const userNameMinLength =  6;  // globalconstants.userNameIdMinLength;


const Actions = {
  States: 'US States',
  Sub_Category: 'Sub category', // to handle cities based on selected COUNTRY / STATE
};


class OnBoardingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.inputs = {};
    this.state = {
      valuePickerTitle: '',
      valuePickerData: US_STATES,
      valuePickerModalVisible: false,
      values: {
        address1: '',
        address2: '',
        city: '',
        phoneNumber: '',
        zip: '',
        mainType: '',
        subType: '',
      },
      errors: {
        address1: '',
        address2: '',
        city: '',
        phoneNumber: '',
        zip: '',
        mainType: '',
        subType: '',
      },
    };
  }

  async componentDidUpdate(prevProps, prevState){
    if(prevProps.auth != this.props.auth){
      try{
        if(this.props.auth?.user?.user?.email){
          this.props.navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [
                { name: 'OnboardingSkills' },
                // {
                //   name: 'Home',
                //   params: { user: 'jane' },
                // },
              ],
            })
          );
        }
      } catch (e){
        
      }
    }
  }

  onValueChange = (fieldName) => (value) => {
    this.setState({
      values: {
        ...this.state.values,
        [fieldName]: value,
      },
      errors: {
        ...this.state.errors,
        [fieldName]: '',
      },
    });
  };

  onSubmit = (nextFieldName) => () => {
    if (nextFieldName && this.inputs[nextFieldName]) {
      this.inputs[nextFieldName].focus();
    }
  };

  addInput = (fieldName) => (input) => {
    this.inputs[fieldName] = input;
  };

  validateEmail = (value) => {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(value);
  };

  validatePhone = (phone) => {
      var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
      if(phone?.length > 6)
      {
        // we can use and modify regex later.
        // return re.test(phone.replace(/\s+/g, ''));
        return true;
      }
      else {
        return false
      }
  };

  validateUserName = (city) => {
    if (city.length >= userNameMinLength && city.length <= userNameMaxLength) {
      if (city) var re = /^(?!.*[_\s-]{2,})[a-zA-Z0-9][a-zA-Z0-9_\-]*[a-zA-Z0-9]$/;
      return re.test(city);
    } else {
      if (city.length > 0) {
        // DropDownHolder.alert(
        //   'info',
        //   'User Name',
        //   'User name must be greater than ' + userNameMinLength + ' and less than ' + userNameMaxLength + ' characters',
        // );
        alert('City name must be greater than ' + userNameMinLength + ' and less than ' + userNameMaxLength + ' characters')
      }
      return false;
    }
  };

  validate = () => {
    // for testing

    //  this.props.dispatchUserSignup({
    //   email: 'faisal11@mail.com',
    //   password: 'password',
    //   firstName: 'firstName',
    //   lastName: 'lastName',
    //   address1: 'address1',
    //   address2: 'address2',
    //   podId: 1,
    //   phone: 122233232,
    //   city: 'cewcew',
    //   state: 'cewcew',
    //   zip: '3efce'
    // })

    let { userInfo } = this.props.route.params;
    console.log(userInfo)
    Keyboard.dismiss();
    const {
      city,
      address1,
      address2,
      phoneNumber,
      zip,
      mainType,
    } = this.state.values;
    let errors = {
      ...{ phoneNumber: phoneNumber ? '' : 'Phone number should contain atleast 7 digits' },
      address1: address1 ? '' : 'Address is required',
      city: city ? '' : 'City name is required',
      zip: zip ? '' : 'Zip code is required',
      mainType: mainType ? '' : 'State selection is required',
    };

    errors = {
      ...errors,
      ...{ city: _.size(city) > 0 ? '' : 'Enter a valid city name' },
      ...{ phoneNumber: this.validatePhone(phoneNumber) ? '' : 'Phone number should contain atleast 7 digits' }
    };

    this.setState(
      {
        errors,
      },
      () => {
        if (Object.values(errors).every((value) => value == '')) {
          this.props.dispatchUserSignup({
            email: userInfo?.email,
            password: userInfo?.password,
            firstName: userInfo?.firstName,
            lastName: userInfo?.lastName,
            address1,
            address2,
            podId: userInfo?.podId,
            phone: phoneNumber,
            city,
            state: mainType,
            zip
          })
        }
      },
    );
  };

  updateMainType = (value) => {
    this.setState({
      values: {
        ...this.state.values,
        ['mainType']: value,
        ['subType']: '',  // to pickup other values
      },
      errors: {
        ...this.state.errors,
        ['mainType']: '',
      },
    });
  };

  toggleValuePickerModal = () => {
    this.setState({
      valuePickerModalVisible: !this.state.valuePickerModalVisible,
    });
  };
  
  render() {
    let {
      errors,
      valuePickerData,
      values: { address1, address2, city, phoneNumber, zip },
    } = this.state;

    return (
      <ImageBackground source={images.appBackground} style={cs.container}>
        <KeyboardAvoidingView
          behavior={platform.platform == 'ios' ? 'position' : 'height'}
          style={{ flex: 1 }}
          contentContainerStyle={{ flex: 1 }}
          keyboardVerticalOffset={platform.platform == 'ios' && -140}
        >
        <ScrollView
          style={style.scrollView}
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
            flexGrow: 1,
            paddingBottom: GetOptimalHieght(100),
          }}
          bounces={true}
          scrollEnabled={true}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}>
          <View style={style.inputContainer}>
            <Text
              style={{
                color: COLORS.DARK_BUTTON,
                fontSize: scaledFontSize(18),
                // fontFamily: 'Poppins',
                fontWeight: '600',
                position: 'absolute',
                top: GetOptimalHieght(65),
              }}>
              {'Join Paskho'}
            </Text>
            <View style={[cs.authBox, cs.elevatedShadow, { paddingTop: GetOptimalHieght(24) }]}>
              <View style={style.itemContainer}>
                <InputBox
                  inputProps={{
                    ...commonInputProps,
                  }}
                  wrapperStyle={style.inputWrapper}
                  inputStyle={style.inputStyle}
                  error={errors.address1}
                  value={address1}
                  ref={this.addInput('address1')}
                  onChange={this.onValueChange('address1')}
                  onSubmit={this.onSubmit('address2')}
                  showLabel
                  labelStyle={style.labelStyle}
                  label={'Address 1' + ' *'}
                  labelColor={COLORS.PRIMARY_BLUE}
                />
              </View>
              <View style={style.itemContainer}>
                <InputBox
                  inputProps={{
                    ...commonInputProps,
                  }}
                  wrapperStyle={style.inputWrapper}
                  inputStyle={style.inputStyle}
                  error={errors.address2}
                  value={address2}
                  ref={this.addInput('address2')}
                  onChange={this.onValueChange('address2')}
                  onSubmit={this.onSubmit('city')}
                  showLabel
                  labelStyle={style.labelStyle}
                  label={'Address 2'}
                  labelColor={COLORS.PRIMARY_BLUE}
                />
              </View>
              <View style={style.itemContainer}>
                <InputBox
                  inputProps={{
                    ...commonInputProps,
                  }}
                  wrapperStyle={style.inputWrapper}
                  inputStyle={style.inputStyle}
                  error={errors.city}
                  value={city}
                  showLabel
                  ref={this.addInput('city')}
                  onChange={this.onValueChange('city')}
                  onSubmit={this.onSubmit('zip')}
                  labelStyle={style.labelStyle}
                  label={'City' + ' *'}
                  labelColor={COLORS.PRIMARY_BLUE}
                />
              </View>
              <View style={style.pickerContainer}>
                <Text style={[style.labelStyle, style.extraLable]}>{'State *'} </Text>
                <TouchableOpacity
                  style={[style.inputWrapper, style.inputWrapperExtra]}
                  onPress={() => {
                    Keyboard.dismiss();
                    this.setState(
                      {
                        valuePickerData: valuePickerData,
                        valuePickerTitle: Actions.States,
                      },
                      () => {
                        this.setState({
                          valuePickerModalVisible: true,
                        });
                      },
                    );
                  }}>
                  <Text style={style.inputStyle}>
                    {this.state?.values?.mainType == '' ? 'Select State' : this.state?.values?.mainType}
                  </Text>
                  {/* <AntDesign name="caretdown" color={'#9D9D9D'} size={GetOptimalHieght(10)}></AntDesign> */}
                </TouchableOpacity>
                {errors.mainType ? (
                  <View style={[cs.errorWrapper, { marginTop: GetOptimalHieght(1), paddingLeft: GetOptimalWidth(15) }]}>
                    <Text style={style.errorStyle}>{errors.mainType}</Text>
                  </View>
                ) : null}
              </View>

              <View style={style.itemContainer}>
                <InputBox
                  inputProps={{
                    ...commonInputProps,
                  }}
                  wrapperStyle={style.inputWrapper}
                  inputStyle={style.inputStyle}
                  error={errors.zip}
                  value={zip}
                  ref={this.addInput('zip')}
                  onChange={this.onValueChange('zip')}
                  showLabel
                  keyboardType={'phone-pad'}
                  labelStyle={style.labelStyle}
                  label={'Zip *'}
                  labelColor={COLORS.PRIMARY_BLUE}
                />
              </View>

              <View style={style.itemContainer}>
                <InputBox
                  inputProps={{
                    ...commonInputProps,
                  }}
                  wrapperStyle={style.inputWrapper}
                  inputStyle={style.inputStyle}
                  error={errors.phoneNumber}
                  value={phoneNumber}
                  keyboardType={'phone-pad'}
                  ref={this.addInput('phoneNumber')}
                  onChange={this.onValueChange('phoneNumber')}
                  showLabel
                  labelStyle={style.labelStyle}
                  label={'Phone' + ' *'}
                  labelColor={COLORS.PRIMARY_BLUE}
                />
              </View>

              <View style={style.buttonContainer}>
                <Button
                  text={'Continue'}
                  style={style.button}
                  textStyle={style.buttonText}
                  onPress={() => {
                    this.validate();
                  }}
                />
              </View>
            </View>
          </View>
            { IS_TESTING && 
            <View style={[style.registerContainer,{ paddingTop: 10 }]}>
              <TouchableOpacity style={style.loginButtonContainer} onPress={() => this.props.navigation.navigate('OnboardingSkills')}>
                <Text style={style.registerText}> {'PROCEED (TEST MODE)'}</Text>
              </TouchableOpacity>
            </View>}
        </ScrollView>
        </KeyboardAvoidingView>
        
        <ValuePickerModal
          title={this.state.valuePickerTitle}
          data={this.state.valuePickerData}
          valuePickerModalVisible={this.state.valuePickerModalVisible}
          UpdateValue={(value) => {
            if (this.state.valuePickerTitle == Actions.States) {
              this.updateMainType(value);
            } 
          }}
          toggleModal={this.toggleValuePickerModal}>
        </ValuePickerModal>
    </ImageBackground>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchUserSignup: (data) => dispatch(userSignup(data)),
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(OnBoardingScreen)

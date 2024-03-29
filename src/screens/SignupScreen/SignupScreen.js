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
import AntDesign from 'react-native-vector-icons/AntDesign';
import _ from 'lodash'
import { connect } from 'react-redux'
import platform from '../../helpers/platform'
import { getAllSkills, fetchPods } from '../../thunk';
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
import style from './styles';

let IS_TESTING = false;

const commonInputProps = {
  style: cs.input,
  autoCorrect: false,
  returnKeyType: 'next',
  placeholderTextColor: COLORS.NAMECOLORNEW,
  selectionColor: COLORS.NAMECOLORNEW,
  maxLength: 60,
  autoCapitalize: 'none',
};

const Actions = {
  States: 'Select Pod',
  Sub_Category: 'Sub category', // to handle cities based on selected COUNTRY / STATE
};

class SignupScreen extends React.Component {
  constructor(props) {
    super(props);
    this.inputs = {};
    this.state = {
      valuePickerTitle: '',
      valuePickerData: [],
      valuePickerModalVisible: false,
      values: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        selectedPodName: '',
        subType: '',
      },
      errors: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        selectedPodName: '',
        subType: '',
      },
    };
  }

  componentDidMount(){
    this.props.dispatchFetchPods();
    this.props.getAllSkills();
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

  validate = () => {
    Keyboard.dismiss();
    const {
      email,
      firstName,
      lastName,
      password,
      confirmPassword,
      selectedPodName,
    } = this.state.values;
    let errors = {
      firstName: firstName ? '' : 'First Name is required',
      password: password ? '' : 'New password is required',
      confirmPassword: confirmPassword ? '' : 'Please re-enter new password',
      selectedPodName: selectedPodName ? '' : 'Pod selection is required',
    };

    errors = {
      ...errors,
      ...{ email: this.validateEmail(email) ? '' : 'Enter a valid email' },
      ...{ password: confirmPassword === password ? '' : 'Passwords does not match' },
      ...{ confirmPassword: confirmPassword === password ? '' : 'Passwords does not match' },
    };

    errors.password = _.size(password) == 0 ? 'Password cannot be empty' : errors.password;
    errors.confirmPassword =  _.size(confirmPassword) == 0 ? 'Password cannot be empty' : errors.confirmPassword;

    this.setState(
      {
        errors,
      },
      () => {
        if (Object.values(errors).every((value) => value == '')) {
          let userInfo = {
            email,
            password,
            firstName,
            lastName,
            podId: this.props?.pods[this.props?.pods?.findIndex(pod => pod.name == selectedPodName)].id,
          }
          this.props.navigation.navigate('OnboardingAddress', { userInfo })
        }
      },
    );
  };

  updateselectedPodName = (value) => {
    this.setState({
      values: {
        ...this.state.values,
        ['selectedPodName']: value,
        ['subType']: '',  // to pickup other values
      },
      errors: {
        ...this.state.errors,
        ['selectedPodName']: '',
      },
    });
  };

  toggleValuePickerModal = () => {
    this.setState({
      valuePickerModalVisible: !this.state.valuePickerModalVisible,
    });
  };

  onPressLogin = () => {
    this.props.navigation.goBack()
  }
  
  render() {
    let {
      errors,
      valuePickerData,
      values: { firstName, lastName, email, password, confirmPassword },
    } = this.state;

    let podsName = this.props?.pods?.map(pod => pod.name);
    console.log(this.state.selectedPodName);
    return (
      <ImageBackground source={images.appBackground} style={cs.container}>
        <KeyboardAvoidingView
          behavior={platform.platform == 'ios' ? 'position' : 'height'}
          style={{ flex: 1 }}
          contentContainerStyle={{ flex: 1 }}
          keyboardVerticalOffset={platform.platform == 'ios' && -180}
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
              {'Create Account'}
            </Text>
            <View style={[cs.authBox, cs.elevatedShadow, { paddingTop: GetOptimalHieght(24) }]}>
              <View style={style.itemContainer}>
                <InputBox
                  inputProps={{
                    ...commonInputProps,
                  }}
                  wrapperStyle={style.inputWrapper}
                  inputStyle={style.inputStyle}
                  error={errors.firstName}
                  value={firstName}
                  ref={this.addInput('firstName')}
                  onChange={this.onValueChange('firstName')}
                  onSubmit={this.onSubmit('lastName')}
                  showLabel
                  labelStyle={style.labelStyle}
                  label={'First Name' + ' *'}
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
                  error={errors.lastName}
                  value={lastName}
                  ref={this.addInput('lastName')}
                  onChange={this.onValueChange('lastName')}
                  onSubmit={this.onSubmit('email')}
                  showLabel
                  labelStyle={style.labelStyle}
                  label={'Last Name'}
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
                  error={errors.email}
                  value={email}
                  showLabel
                  keyboardType="email-address"
                  ref={this.addInput('email')}
                  onChange={this.onValueChange('email')}
                  onSubmit={this.onSubmit('password')}
                  labelStyle={style.labelStyle}
                  label={'Email' + ' *'}
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
                  error={errors.password}
                  value={password}
                  showLabel
                  ref={this.addInput('password')}
                  onChange={this.onValueChange('password')}
                  onSubmit={this.onSubmit('confirmPassword')}
                  labelStyle={style.labelStyle}
                  label={'Password' + ' *'}
                  labelColor={COLORS.PRIMARY_BLUE}
                  secure={true}
                />
              </View>
              <View style={style.itemContainer}>
                <InputBox
                  inputProps={{
                    ...commonInputProps,
                  }}
                  wrapperStyle={style.inputWrapper}
                  inputStyle={style.inputStyle}
                  error={errors.confirmPassword}
                  value={confirmPassword}
                  ref={this.addInput('confirmPassword')}
                  onChange={this.onValueChange('confirmPassword')}
                  labelStyle={style.labelStyle}
                  showLabel
                  label={'Confirm Password' + ' *'}
                  labelColor={COLORS.PRIMARY_BLUE}
                  secure={true}
                />
              </View>
          
    
              <View style={style.pickerContainer}>
                <Text style={[style.labelStyle, style.extraLable]}>{'Pod *'} </Text>
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
                    {this.state?.values?.selectedPodName == '' ? 'Select Pod' : this.state?.values?.selectedPodName}
                  </Text>
                  {/* <AntDesign name="caretdown" color={'#9D9D9D'} size={GetOptimalHieght(10)}></AntDesign> */}
                </TouchableOpacity>
                {errors.selectedPodName ? (
                  <View style={[cs.errorWrapper, { marginTop: GetOptimalHieght(1), paddingLeft: GetOptimalWidth(15) }]}>
                    <Text style={style.errorStyle}>{errors.selectedPodName}</Text>
                  </View>
                ) : null}
              </View>
              
              <View style={style.buttonContainer}>
                <Button
                  text={'Register'}
                  style={style.button}
                  textStyle={style.buttonText}
                  onPress={() => {
                    this.validate();
                  }}
                />
              </View>
            </View>
          </View>

          <View style={style.bottomContainer}>
            <View style={style.registerContainer}>
              <Text style={style.joinWith}>{'Already have an account?'}</Text>
              <TouchableOpacity style={style.loginButtonContainer} onPress={this.onPressLogin}>
                <Text style={style.registerText}> {'Login'}</Text>
              </TouchableOpacity>
            </View>

            { IS_TESTING && 
            <View style={[style.registerContainer,{ paddingTop: 10 }]}>
              <TouchableOpacity style={style.loginButtonContainer} onPress={() => this.props.navigation.navigate('OnboardingAddress')}>
                <Text style={style.registerText}> {'PROCEED (TEST MODE)'}</Text>
              </TouchableOpacity>
            </View>}
          </View>
        </ScrollView>
        </KeyboardAvoidingView>
        
        <ValuePickerModal
          title={this.state.valuePickerTitle}
          data={podsName}
          valuePickerModalVisible={this.state.valuePickerModalVisible}
          UpdateValue={(value) => {
            if (this.state.valuePickerTitle == Actions.States) {
              this.updateselectedPodName(value);
            } 
          }}
          toggleModal={this.toggleValuePickerModal}>
        </ValuePickerModal>
    </ImageBackground>
    );
  }
}

const mapStateToProps = ({ generalData }) => {
  let { pods } = generalData
  return {
    pods
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPods,
    dispatchFetchPods: () => dispatch(fetchPods()),
    getAllSkills:() => dispatch(getAllSkills()),
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen)

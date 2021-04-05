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
import _ from 'lodash'
import { connect } from 'react-redux'
import { CommonActions } from '@react-navigation/native';
import {
  COLORS,
  commonStyle as cs,
  fullWidth,
  GetOptimalHieght,
  GetOptimalWidth,
  images,
} from '../../common';
import { userLogin } from '../../thunk';
import Button from '../../components/button';
import InputBox from '../../components/inputBox';
import platform from '../../helpers/platform'
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

class SigninScreen extends React.Component {
  constructor(props) {
    super(props);
    this.inputs = {};
    this.state = {
      values: {
        email: '',
        password: '',
      },
      errors: {
        email: '',
        password: '',
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
                { name: 'Home' }
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

  onRegisterPress = () => {
    this.props.navigation.navigate('Register')
  }

  onForgotPasswordPress = () => {
    this.props.navigation.navigate('ResetPassword')
  }

  validate = () => {
    Keyboard.dismiss();
    const {
      email,
      password,
    } = this.state.values;

    let errors = {
      email: this.validateEmail(email) ? '' : 'Enter a valid email',
      password:  _.size(password) >= 6 ? ''  : 'Password should contain atleast 6 characters'
    };

    this.setState(
      {
        errors,
      },
      () => {
        if (Object.values(errors).every((value) => value == '')) {
            this.props.dispatchUserLogin({ email, password });
        }
      },
    );
  };
  
  render() {
    let { email, password } = this.state.values;
    let { errors } = this.state;

    return (
      <ImageBackground source={images.appBackground} style={cs.container}>
        <KeyboardAvoidingView
          behavior={platform.platform == 'ios' ? 'position' : 'height'}
          style={{ flex: 1 }}
          contentContainerStyle={{ flex: 1 }}
          keyboardVerticalOffset={platform.platform == 'ios' && -180}
          >
          <ScrollView
            keyboardShouldPersistTaps="handled"
            style={style.scrollView}
            contentContainerStyle={{
              paddingBottom: 120
            }}
            bounces={true}
            scrollEnabled={true}
            showsVerticalScrollIndicator={false}>
            <View style={style.logoContainer}>
              {/* {logo here} */}
            </View>
            <View style={style.bodyContainer}>
              <View style={style.LogoTextArea}>
                <Text style={style.welcomeText}>{'Login'}</Text>
                {/* <Text style={style.welcomeDescription}>
                  {'App slogan here'}
                </Text> */}
              </View>
              <View style={style.inputContainer}>
                <View style={[cs.authBox, cs.elevatedShadow, { paddingVertical: GetOptimalHieght(41) }]}>
                  <View style={{ marginVertical: 10 }}>
                    <InputBox
                      inputProps={{
                        ...commonInputProps,
                      }}
                      wrapperStyle={style.inputWrapper}
                      inputStyle={style.inputStyle}
                      error={errors.email}
                      value={email}
                      keyboardType={'email-address'}
                      ref={this.addInput('email')}
                      onChange={this.onValueChange('email')}
                      onSubmit={this.onSubmit('password')}
                      labelAreaStyle={{ width: GetOptimalWidth(200) }}
                      showLabel
                      labelStyle={style.labelStyle}
                      label={'Email *'}
                      labelColor={COLORS.PRIMARY_BLUE}
                    />
                  </View>

                  <View style={{ marginBottom: 10 }}>
                    <InputBox
                      inputProps={{
                        ...commonInputProps,
                      }}
                      wrapperStyle={style.inputWrapper}
                      inputStyle={style.inputStyle}
                      error={errors.password}
                      value={password}
                      ref={this.addInput('password')}
                      onChange={this.onValueChange('password')}
                      onSubmit={this.onSubmit('')}
                      secure={true}
                      labelAreaStyle={{ width: GetOptimalWidth(200) }}
                      showLabel
                      labelStyle={style.labelStyle}
                      label={'Password *'}
                      labelColor={COLORS.PRIMARY_BLUE}
                    />
                  </View>
                  <View
                    style={{ width: fullWidth * 0.75, paddingVertical: 12 }}>
                    <Button
                      text={'Login'}
                      style={style.button}
                      textStyle={style.buttonText}
                      onPress={() => this.validate()}
                    />
                  </View>

                  <View style={style.registerConatiner}>
                    <Text style={style.joinWith}>
                      {'Forgot password ?'}
                    </Text>
                    <TouchableOpacity style={style.loginContainer} onPress={this.onForgotPasswordPress}>
                      <Text style={style.registerText}>{'Click here'}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={style.socialContainer}>
                  <View style={style.switchType}>
                    <TouchableOpacity
                      style={style.switchButton}
                      onPress={this.onRegisterPress}>
                      <Text style={style.switchText}>{'Register'}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
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
    dispatchUserLogin: (data) => dispatch(userLogin(data)),
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(SigninScreen)

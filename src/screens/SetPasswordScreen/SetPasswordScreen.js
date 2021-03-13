import React from 'react';
import {
  Image,
  ImageBackground,
  Keyboard,
  ScrollView,
  View,
  Text,
  KeyboardAvoidingView
} from 'react-native';
import { COLORS, commonStyle as cs, fullWidth, images } from '../../common';
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

class SetPasswordScreen extends React.Component {
  constructor(props) {
    super(props);
    this.inputs = {};
    this.state = {
      data: props.route.params && props.route.params.data ? props.route.params.data : {},
      values: {
        pin: '',
        password: '',
        confirmPassword: '',
      },
      errors: {
        pin: '',
        password: '',
        confirmPassword: '',
      },
    };
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

  validate = async () => {
    Keyboard.dismiss();

    const {
      values: { password, confirmPassword, pin },
    } = this.state;

    let errors = {
      pin: pin ? '' : 'PIN is required',
      password: password ? '' : 'New password is required',
      confirmPassword: confirmPassword ? '' : 'Please re-enter new password',
    };

    errors.password = confirmPassword === password ? '' : 'Passwords does not match';
    errors.confirmPassword = confirmPassword === password ? '' : 'Passwords does not match';

    errors.password = password?.toString().length == 0 ? 'Password cannot be empty' : errors.password;
    errors.confirmPassword = confirmPassword?.toString().length == 0 ? 'Password cannot be empty' : errors.confirmPassword;

    this.setState(
      {
        errors,
      },
      () => {
        if (Object.values(errors).every((value) => value == '')) {
          alert('Success')
        }
      },
    );
  };

  render() {
    const { password, confirmPassword, pin } = this.state.values;
    let { errors } = this.state;
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
          contentContainerStyle={{ paddingBottom: 20, paddingHorizontal: 10 }}
          bounces={true}
          showsVerticalScrollIndicator={false}>
          <View style={style.logoContainer}>
            <Image source={images.forgotPassword_image} />
          </View>

          <View style={{ paddingHorizontal: 50 }}>
            <Text style={style.welcomeText}>{'Set new password'}</Text>
          </View>
          <View style={style.inputContainer}>
            <View style={[cs.authBox, cs.elevatedShadow]}>
              <View style={{ marginTop: 10 }}>
                <InputBox
                  inputProps={{
                    ...commonInputProps,
                  }}
                  wrapperStyle={cs.inputWrapper}
                  inputStyle={cs.inputStyle}
                  error={errors.pin}
                  value={pin}
                  ref={this.addInput('pin')}
                  onChange={this.onValueChange('pin')}
                  onSubmit={this.onSubmit('password')}
                  placeholder={'Enter PIN'}
                  placeholderColor={COLORS.PLACE_HOLDER}
                />
              </View>
              <View style={{ marginVertical: 10 }}>
                <InputBox
                  inputProps={{
                    ...commonInputProps,
                  }}
                  wrapperStyle={cs.inputWrapper}
                  inputStyle={cs.inputStyle}
                  error={errors.password}
                  value={password}
                  ref={this.addInput('password')}
                  onChange={this.onValueChange('password')}
                  onSubmit={this.onSubmit('confirmPassword')}
                  placeholder={'Enter New Password'}
                  placeholderColor={COLORS.PLACE_HOLDER}
                  secure={true}
                />
              </View>
              <View style={{ marginBottom: 10 }}>
                <InputBox
                  inputProps={{
                    ...commonInputProps,
                  }}
                  wrapperStyle={cs.inputWrapper}
                  inputStyle={cs.inputStyle}
                  error={errors.confirmPassword}
                  value={confirmPassword}
                  ref={this.addInput('confirmPassword')}
                  onChange={this.onValueChange('confirmPassword')}
                  onSubmit={this.onSubmit('')}
                  placeholder={'Re-enter New Password'}
                  placeholderColor={COLORS.PLACE_HOLDER}
                  secure={true}
                />
              </View>
              <View style={{ width: fullWidth * 0.75, marginBottom: 24, marginTop: 16 }}>
                <Button text={'Save Changes'} style={style.button} textStyle={style.buttonText} onPress={this.validate} />
                </View>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

export default SetPasswordScreen;

import React from 'react';
import {
  Image,
  ImageBackground,
  Keyboard,
  ScrollView,
  View,
  Text
} from 'react-native';
import { COLORS, commonStyle as cs, ENUMS, fullWidth, GetOptimalHieght, images, withTheme,GetOptimalWidth } from '../../common';
import Button from '../../components/button';
import InputBox from '../../components/inputBox';
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

class ResetPasswordScreen extends React.Component {
  constructor(props) {
    super(props);
    this.inputs = {};
    this.state = {
      values: {
        email: '',
      },
      errors: {
        email: '',
      },
    };
  }

  validateEmail = (email) => {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

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

  validate = async () => {
    Keyboard.dismiss();

    const { email } = this.state.values;

    let errors = {};

    let isEmailValid = this.validateEmail(email);

    if (!isEmailValid) {
     errors.email = 'Please enter a valid email';
    }

    this.setState(
      {
        errors,
      },
      () => {
        if (Object.values(errors).every((value) => value == '')) {
          this.props.navigation.navigate('SetPassword');
        }
      },
    );
  };

  render() {
    const { email } = this.state.values;
    let { errors } = this.state;

    return (
      <ImageBackground source={images.appBackground} style={cs.container}>
        <ScrollView
          keyboardShouldPersistTaps="always"
          style={style.scrollView}
          contentContainerStyle={{
            paddingBottom:GetOptimalHieght(20),
          }}
          bounces={true}
          scrollEnabled={true}
          showsVerticalScrollIndicator={false}>
          <View style={style.logoContainer}>
            <Image source={images.forgotPassword_image} />
          </View>
          <View style={style.bodyContainer}>
            <View style={{ paddingHorizontal:GetOptimalWidth(50) }}>
              <Text style={style.welcomeText}>{'Forgot Password'}</Text>
              <Text style={style.welcomeDescription}>{'Enter your email that you registered with and we will send you a pin to reset your password.'}</Text>
            </View>
            <View style={style.inputContainer}>
              <View style={[cs.authBox, cs.elevatedShadow,{paddingVertical: GetOptimalHieght(31),}]}>
                <View style={{ marginTop: 20 }}>
                  <InputBox
                    inputProps={{
                      ...commonInputProps,
                    }}
                    wrapperStyle={style.inputWrapper}
                    inputStyle={style.inputStyle}
                    error={errors.email}
                    value={email}
                    onChange={this.onValueChange('email')}
                    labelAreaStyle={{width:GetOptimalWidth(200),marginBottom:GetOptimalHieght(8),backgroundColor: null,}}
                    showLabel
                    labelStyle={style.labelStyle}
                    label={'Email *'}
                    labelColor={COLORS.PRIMARY_BLUE}
                  />
                </View>

                <View
                  style={{
                    width: fullWidth * 0.75,
                    marginBottom:GetOptimalHieght(24),
                    marginTop:GetOptimalHieght(16),
                  }}>
                  <Button text={'Send'} style={style.button} textStyle={style.buttonText} onPress={this.validate} />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

export default ResetPasswordScreen;

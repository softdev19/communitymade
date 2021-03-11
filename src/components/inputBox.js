import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Image, Text, Dimensions, TextInput, TouchableOpacity, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { images } from '../common';
import COLORS, { alpha } from '../common/colors';
import { commonStyle as cs, GetOptimalWidth, scaledFontSize,GetOptimalHieght } from '../common/styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class InputBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showValue: props.secure ? true : false,
    };
  }

  static propTypes = {
    inputProps: PropTypes.any.isRequired,
    wrapperStyle: PropTypes.any,
    inputStyle: PropTypes.any,
    error: PropTypes.string,
    value: PropTypes.any,
    editable: PropTypes.bool,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    showLabel: PropTypes.bool,
    label: PropTypes.string,
    labelColor: PropTypes.string,
    placeholder: PropTypes.string,
    placeholderColor: PropTypes.string,
    onFocus: PropTypes.func,
    secure: PropTypes.bool,
    editIcon: PropTypes.bool,
    attachIcon: PropTypes.bool,
    toggleAddRemoveModal: PropTypes.func,
    labelStyle: PropTypes.any,
  };

  static defaultProps = {
    wrapperStyle: null,
    inputStyle: null,
    error: '',
    value: '',
    onSubmit: () => {},
    onChange: () => {},
    onFocus: () => {},
    showLabel: false,
    editable: true,
    label: null,
    labelColor: null,
    placeholder: null,
    placeholderColor: null,
    labelStyle: null,
    secure: false,
    editIcon: false,
    attachIcon: false,
    attachSource: null,
    toggleAddRemoveModal: () => {},
  };

  focus = () => {
    //this.input.focus();
  };

  onClick() {}

  togglePassword = () => {
    this.setState({ showValue: !this.state.showValue });
  };

  render() {
    const errorStyle = {
      borderColor: alpha(COLORS.RED, 0.7),
      marginBottom: 0,
    };
    const { width, height } = Dimensions.get('screen');
    const {
      error,
      value,
      onChange,
      onPress,
      onSubmit,
      inputProps,
      showLabel,
      editable,
      label,
      keyboardType,
      labelColor,
      placeholder,
      placeholderColor,
      onFocus,
      secure,
      editIcon,
      attachIcon,
      commentIcon,
      sendComment,
      attachSource,
      toggleAddRemoveModal,
      labelStyle,
      paymentFlexCheck,
      ref,
      verifiedPhoneEmail,
      isNotEditable,
      onContentSizeChange,
      onBlur,
      textAlign,
      labelAreaStyle,
      returnKeyType,
    } = this.props;
    const { showValue } = this.state;
    return (
      <View
        style={{
          width: paymentFlexCheck ? paymentFlexCheck : '50%',
          opacity: inputProps.editable == false ? 0.5 : 1,
        }}>
        {showLabel ? (
          <View
            style={[
              {
                flex: 1,
                backgroundColor: COLORS.WHITE,
                marginBottom: 5,
                marginLeft: GetOptimalWidth(23),
                width: '100%',
              },
              { ...labelAreaStyle }
            ]}>
            <Text
              style={
                ({
                  color: labelColor ? labelColor : COLORS.PRIMARY_BLUE,
                  fontSize:scaledFontSize(11),
                  textAlign: 'left',
                  fontWeight: '500',
                },
                { ...labelStyle })
              }>
              {label ? label : inputProps.placeholder}
            </Text>
          </View>
        ) : null}
        <View style={{ flex:2 }}>
          <View style={[this.props.wrapperStyle, error ? errorStyle : null, { alignItems: 'center' }]}>
            <TextInput
            onBlur={onBlur}
            onContentSizeChange={onContentSizeChange}
            multiline={this.props?.multilineEnabled}
              underlineColorAndroid={COLORS.TRANSPARENT}
              {...inputProps}
              value={value}
              returnKeyType={returnKeyType}
              keyboardType={keyboardType ? keyboardType : 'default'}
              onFocus={onFocus}
              editable={isNotEditable ? false : true}
              pointerEvents={isNotEditable && 'none'}
              onChangeText={onChange}
              onSubmitEditing={onSubmit}
              secureTextEntry={showValue}
              placeholder={placeholder}
              placeholderTextColor={placeholderColor}
              style={{ ...this.props.inputStyle,...isNotEditable?{color:COLORS.INPUT_TEXT}:{color: COLORS.PRIMARY_BLUE,} }}
              textAlign={textAlign}
              ref={ref}
            />
            {secure && (
              <TouchableOpacity
                style={{
                  // alignSelf: 'flex-start',
                  width: 27,
                  height: 27,
                  // position: 'absolute',
                  backgroundColor: COLORS.AUTH_BOTTOM,
                  borderRadius: 15,
                  right: 10,
                  //top: height * 0.007,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={this.togglePassword}>
                {/* <AntDesign style={{ alignItems: 'center' }} name={'eye'} color={COLORS.PLACE_HOLDER} size={15} /> */}
              </TouchableOpacity>
            )}
            {verifiedPhoneEmail && (
              <TouchableOpacity
                style={{
                  width: 30,
                  height: 30,
                  position:"absolute",
                  // backgroundColor: COLORS.AUTH_BOTTOM,
                  borderRadius: 15,
                  right: 10,
                  top: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => toggleAddRemoveModal()}>
                {/* <AntDesign name={'checkcircleo'} color={COLORS.PLACE_HOLDER} size={18} /> */}
              </TouchableOpacity>
            )}
            {editIcon&&!verifiedPhoneEmail && (
              <TouchableOpacity
                style={{
                  width: GetOptimalHieght(25),
                  height: GetOptimalHieght(25),
                  position: 'absolute',
                 // backgroundColor: COLORS.AUTH_BOTTOM,
                  borderRadius: GetOptimalHieght(15),
                  right: GetOptimalHieght(10),
                  top: GetOptimalHieght(5),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => toggleAddRemoveModal()}>
                {/* <AntDesign name={'edit'} color={COLORS.PLACE_HOLDER} size={18} /> */}
              </TouchableOpacity>
            )}
            {attachIcon && (
              <TouchableOpacity
                style={{
                  width: 30,
                  height: 30,
                  position: 'absolute',
                  backgroundColor: COLORS.AUTH_BOTTOM,
                  borderRadius: 15,
                  right: 10,
                  top: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => toggleAddRemoveModal()}>
                {/* <AntDesign name={'picture'} color={COLORS.PLACE_HOLDER} size={18} /> */}
              </TouchableOpacity>
            )}
            {commentIcon && (
              <TouchableOpacity
                style={{
                  width: 30,
                  height: 30,
                  position: 'absolute',
                  backgroundColor: COLORS.AUTH_BOTTOM,
                  borderRadius: 15,
                  right:GetOptimalWidth(8),
                  top:GetOptimalHieght(5),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => sendComment()}>
                {/* <FontAwesome name={'send'} color={COLORS.PLACE_HOLDER} size={GetOptimalHieght(18)} /> */}
              </TouchableOpacity>
            )}
          </View>
          {/* {attachIcon &&
            <Image source={ images.wallet } />} */}
          {error ? (
            <View style={cs.errorWrapper}>
              <Text
                style={[
                  {
                    color: alpha(COLORS.RED, 0.7),
                    marginTop: GetOptimalHieght(2),
                    fontSize: scaledFontSize(8),
                  },
                  this.props.errorWrapper ? this.props.errorWrapper : cs.errorWrapper,
                ]}>
                {error}
              </Text>
            </View>
          ) : null}
        </View>
      </View>
    );
  }
}

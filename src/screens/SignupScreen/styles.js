import { Platform, StyleSheet } from 'react-native';
import { alpha, COLORS, fullHeight, fullWidth, GetOptimalHieght, GetOptimalWidth, scaledFontSize } from '../../common';

const BUTTON_HEIGHT = Platform.select({
  ios: fullHeight * 0.055,
  android: fullHeight * 0.07,
});

const INPUT_HEIGHT = Platform.select({
  ios: fullHeight * 0.055,
  android: fullHeight * 0.07,
});

const styles = StyleSheet.create({
  itemContainer: { marginBottom: GetOptimalHieght(21), alignSelf: 'center' },
  scrollView: {
    flex: 1,
    marginHorizontal: GetOptimalWidth(16),
  },
  inputWrapperExtra: { alignItems: 'center', paddingRight: GetOptimalHieght(20) },
  inputStyle: {
    flex: 1,
    paddingTop: 0,
    paddingBottom: 0,
    color: COLORS.PRIMARY_BLUE,
    fontSize: scaledFontSize(11),
    fontWeight: '400',
    paddingLeft: GetOptimalWidth(15),
  },
  extraLable: {
    marginLeft: GetOptimalWidth(23),
    paddingBottom: GetOptimalHieght(3),
    fontSize: scaledFontSize(11),
    fontWeight: '500',
  },
  pickerContainer: {
    width: GetOptimalWidth(280),
    marginBottom: GetOptimalHieght(21),
    alignSelf: 'center',
  },
  labelStyle: {
    color: COLORS.DARK_BUTTON,
    fontSize: scaledFontSize(11),
    textAlign: 'left',
    fontWeight: '500',
  },
  inputWrapper: {
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: COLORS.BORDER_COLOR_INPUT,
    width: GetOptimalWidth(280),
    height: GetOptimalHieght(38),
    // height: INPUT_HEIGHT,
    backgroundColor: COLORS.WHITE,
    borderRadius: GetOptimalWidth(40),
    fontSize: scaledFontSize(10),
  },
  imageView: {
    backgroundColor: COLORS.IMAGE_BACKGROUND,
    width: 76,
    height: 76,
    borderRadius: 38,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileText: {
    marginTop: GetOptimalHieght(5),
    textAlign: 'center',
    fontSize: scaledFontSize(11),
    fontWeight: '500',
    // fontFamily: 'Poppins',
    color: COLORS.REGISTER_NOW_COLOR,
  },
  authTypeContainer: {
    backgroundColor: 'red',
    marginTop: GetOptimalHieght(20),
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  welcomeText: {
    flex: 1,
    textAlign: 'center',
    fontSize: scaledFontSize(24),
    // fontFamily: 'Poppins',
    fontWeight: '600',
    marginTop: GetOptimalHieght(70),
  },
  termsAndConditionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: GetOptimalHieght(16),
    marginLeft: GetOptimalWidth(8),
  },
  checkbox: {
    justifyContent: 'center',
    alignItems: 'center',
    color: COLORS.PRIMARY_BLUE,
    borderColor: COLORS.PRIMARY_BLUE,
    borderRadius: 10,
    borderWidth: 1,
  },
  buttonContainer: {
    width: fullWidth * 0.75,
    marginBottom: GetOptimalHieght(16),
    marginTop: GetOptimalHieght(8),
  },
  button: {
    backgroundColor: COLORS.DARK_BUTTON,
    alignItems: 'center',
    justifyContent: 'center',
    height: BUTTON_HEIGHT,
    borderRadius: GetOptimalWidth(25),
  },
  buttonText: {
    color: COLORS.WHITE,
    fontSize: scaledFontSize(14),
    // fontFamily: 'Poppins',
    fontWeight: '700',
  },
  inputContainer: {
    paddingTop: Platform.OS == 'ios' ? GetOptimalHieght(90) : GetOptimalHieght(50),
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.35,
  },
  joinWith: {
    // fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: scaledFontSize(10),
    color: COLORS.DARK_BUTTON,
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  termsAndCondition: {
    // fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: scaledFontSize(12),
    color: COLORS.PRIMARY_BLUE,
  },
  registerText: {
    // fontFamily: 'Poppins',
    fontWeight: '600',
    textDecorationLine: 'underline',
    fontSize: scaledFontSize(12),
    color: COLORS.BUTTON_RED,
  },
  bottomContainer: {
    width: fullWidth,
    marginTop: GetOptimalHieght(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonContainer: {
    // width:GetOptimalWidth(100),
    // height:GetOptimalHieght(40),
    // borderRadius:GetOptimalWidth(25),
    marginLeft: GetOptimalWidth(2),
    //backgroundColor: COLORS.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialContainer: {
    marginTop: GetOptimalHieght(40),
  },
  socialAppContainer: {
    marginTop: GetOptimalHieght(20),
    alignItems: 'center',
    flexDirection: 'row',
  },
  socialButton: {
    marginHorizontal: 3,
  },
  consultancyTypeText: {
    textAlign: 'left',
    fontSize: scaledFontSize(14),
    fontWeight: '600',
    marginLeft: GetOptimalWidth(8),
    marginBottom: GetOptimalWidth(10),
    color: COLORS.PRIMARY_BLUE,
  },
  dropDownContainer: {
    height: INPUT_HEIGHT,
    width: (fullWidth * 0.75) / 2 - 15,
    marginBottom: GetOptimalHieght(10),
  },
  dropDownStyle: {
    backgroundColor: 'white',
    borderTopLeftRadius: GetOptimalWidth(40),
    borderTopRightRadius: GetOptimalWidth(40),
    borderBottomLeftRadius: GetOptimalWidth(40),
    borderBottomRightRadius: GetOptimalWidth(40),
  },
  error: {
    color: alpha(COLORS.RED, 0.7),
    marginTop: GetOptimalHieght(3),
    marginBottom: GetOptimalHieght(20),
    fontSize: scaledFontSize(13),
  },
  errorStyle: {
    color: alpha(COLORS.RED, 0.7),
    marginTop: GetOptimalHieght(2),
    fontSize: scaledFontSize(8),
  },
});

export default styles;

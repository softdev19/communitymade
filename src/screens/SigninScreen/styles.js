import { Platform, StyleSheet, Dimensions } from 'react-native';
import { alpha, COLORS, fullHeight, fullWidth, GetOptimalHieght, GetOptimalWidth, scaledFontSize } from '../../common';


const BUTTON_HEIGHT = Platform.select({
  ios: fullHeight * 0.055,
  android: fullHeight * 0.07,
});

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    marginHorizontal:GetOptimalWidth(16),
  },
  labelStyle:{
    color: COLORS.DARK_BUTTON,
    fontSize: scaledFontSize(11),
    textAlign: 'left',
    fontWeight: '500',
  },
  inputStyle: {
    flex: 1,
    paddingTop:0,
    paddingBottom: 0,
    color: COLORS.PRIMARY_BLUE,
    fontSize: scaledFontSize(11),
    fontWeight: '400',
    paddingLeft: GetOptimalWidth(15),
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

  switchButton: {
    width:GetOptimalWidth(190),
    height: 0.056 * height,
    borderRadius:GetOptimalWidth(25),
    //marginLeft: 15,
    backgroundColor: COLORS.PRIMARY_RED,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Platform.OS == 'ios' ? 0.088 * height : 0.088 * height,
  },
  bodyContainer: {
    alignItems: 'center',
  },
  image: {
    width: GetOptimalWidth(118),
    height: GetOptimalHieght(33),
  },
  authTypeContainer: {
    backgroundColor: 'red',
    marginTop:GetOptimalHieght(20),
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  LogoTextArea:{
    width:GetOptimalWidth(271) ,marginVertical:GetOptimalHieght(20)
  },
  welcomeText: {
    textAlign: 'center',
    fontSize: scaledFontSize(28),
    // fontFamily: 'Poppins',
    fontWeight: '600',
    color: COLORS.POST_USERNAME,
  },
  welcomeDescription: {
    textAlign: 'center',
    fontSize: scaledFontSize(12),
    // fontFamily: 'Poppins',
    fontWeight: '300',
    paddingTop:GetOptimalHieght(18),
    color: COLORS.POST_USERNAME,
  },
  button: {
    backgroundColor: COLORS.DARK_BUTTON,
    alignItems: 'center',
    justifyContent: 'center',
    height: BUTTON_HEIGHT,
    borderRadius:GetOptimalWidth(25),
  },
  buttonText: {
    color: COLORS.WHITE,
    fontSize: scaledFontSize(14),
    // fontFamily: 'Poppins',
    fontWeight: '600',
  },
  socialContainer: {
    marginTop:GetOptimalHieght(40),
  },
  socialAppConatiner: {
    marginTop:GetOptimalHieght(20),
    alignItems: 'center',
    flexDirection: 'row',
  },
  socialButton: {
    marginHorizontal:GetOptimalWidth(3),
    height: 0.056 * height,
    width: 0.12 * width,
  },
  iconStyle: {
    tintColor: 'white',
    height: 18,
    width: 18,
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.35,
  },
  forgotPasswordContainer: {
    height:GetOptimalHieght(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgotPasswordText: {
    // fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: scaledFontSize(11),
    color: COLORS.LIGHT_BLUE_TEXT,
  },
  joinWith: {
    // fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: scaledFontSize(11),
    color: COLORS.POST_USERNAME,
  },
  loginContainer:{
    marginLeft: GetOptimalWidth(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerConatiner: {
    marginTop:GetOptimalHieght(27),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerText: {
    // fontFamily: 'Poppins',
    fontWeight: '500',
    textDecorationLine:"underline",
    fontSize: scaledFontSize(11),
    color: COLORS.SELECTED_DATE_COLOR,
  },
  switchText: {
    // fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: scaledFontSize(13),
    color: COLORS.WHITE,
  },
  bottomContainer: {
    height: 0.1 * height,
    width: width,
    backgroundColor: COLORS.AUTH_BOTTOM,
    borderTopLeftRadius:GetOptimalWidth(40),
    borderTopRightRadius:GetOptimalWidth(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
  switchType: {
    marginTop: GetOptimalHieght(20),
  },
});

export default styles;

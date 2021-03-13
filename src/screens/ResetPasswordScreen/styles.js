import { Platform, StyleSheet } from 'react-native';
import { alpha, COLORS, fullHeight, fullWidth, GetOptimalHieght, GetOptimalWidth, scaledFontSize } from '../../common';

const BUTTON_HEIGHT = Platform.select({
  ios: fullHeight * 0.055,
  android: fullHeight * 0.07,
});

const styles = StyleSheet.create({
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
  inputStyle: {
    flex: 1,
    paddingTop: 0,
    paddingBottom: 0,
    color: COLORS.INPUT_TEXT,
    fontSize: scaledFontSize(11),
    fontWeight: '400',
    paddingLeft: GetOptimalWidth(15),
  },
  scrollView: {
    flex: 1,
    marginHorizontal: GetOptimalWidth(16),
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Platform.OS == 'ios' ? 100 : 50,
  },
  bodyContainer: {
    alignItems: 'center',
  },
  welcomeDescription: {
    textAlign: 'center',
    fontSize: scaledFontSize(14),
 //    fontFamily: 'Poppins',
    fontWeight: '300',
    color: COLORS.POST_DESCRIPTION,
    paddingTop: GetOptimalHieght(16),
  },
  welcomeText: {
    textAlign: 'center',
    fontSize: scaledFontSize(22),
 //    fontFamily: 'Poppins',
    fontWeight: '600',
    marginTop: GetOptimalHieght(40),
    color: COLORS.PRIMARY_BLUE,
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
    fontSize: scaledFontSize(16),
 //    fontFamily: 'Poppins',
    fontWeight: '600',
  },
  inputContainer: {
    marginTop: GetOptimalHieght(30),
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.4,
  },
});

export default styles;

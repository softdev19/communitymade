import { Platform, StyleSheet } from 'react-native';
import { alpha, COLORS, fullHeight, fullWidth, GetOptimalHieght, GetOptimalWidth, scaledFontSize } from '../../common';


const BUTTON_HEIGHT = Platform.select({
  ios: fullHeight * 0.055,
  android: fullHeight * 0.07,
});

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    marginHorizontal:GetOptimalWidth(16),
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Platform.OS == 'ios' ? 100 : 50,
  },
  welcomeText: {
    flex: 1,
    textAlign: 'center',
    fontSize:scaledFontSize(22),
    // fontFamily: 'Poppins',
    fontWeight: '600',
    marginVertical:GetOptimalHieght(30),
    color: COLORS.PRIMARY_BLUE,
  },
  button: {
    backgroundColor: COLORS.PRIMARY_BLUE,
    alignItems: 'center',
    justifyContent: 'center',
    height: BUTTON_HEIGHT,
    borderRadius:GetOptimalWidth(25),
  },
  buttonText: {
    color: COLORS.WHITE,
    fontSize:scaledFontSize(16),
    // fontFamily: 'Poppins',
    fontWeight: '600',
  },

  inputContainer: {
    marginTop:GetOptimalHieght(16),
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.4,
  },
});

export default styles;


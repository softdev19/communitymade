import { Dimensions, Platform, StyleSheet } from 'react-native';
import COLORS, { alpha } from '../common/colors';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const { width: fullWidth, height: fullHeight } = Dimensions.get('window');
const DESIGN_DIMENSIONS = { width: 375, height: 812 };

export const GetOptimalHieght = (height) => {
  return fullHeight * (height / DESIGN_DIMENSIONS.height);
};
export const GetOptimalWidth = (width) => {
  return fullWidth * (width / DESIGN_DIMENSIONS.width);
};

export const scaledFontSize = (fontSize) => {
  return RFValue(fontSize);
};

export const GetMediaPostHeight = () => {
  return Math.ceil((fullWidth * 9) / 16);
};

const SHADOW_SIZE = Platform.select({ ios: 2, android: 10 });
const CONTENT_MARGIN = Platform.select({ ios: 40, android: 0 });

export const INPUT_HEIGHT = Platform.select({
  ios: fullHeight * 0.055,
  android: fullHeight * 0.07,
});

const INPUTBOX_HEIGHT = Platform.select({
  ios: fullHeight * 0.12,
  android: fullHeight * 0.15,
});

export const commonStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    marginTop: CONTENT_MARGIN,
    marginBottom: GetOptimalHieght(40),
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: GetOptimalHieght(20),
  },
  progressView: {
    flex: 1,
    justifyContent: 'center',
  },
  imageView: {
    backgroundColor: '#F2F2F2',
    width: GetOptimalWidth(76),
    height: GetOptimalHieght(76),
    borderRadius: GetOptimalWidth(38),
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorWrapper: {
    flexDirection: 'row',
    paddingLeft: GetOptimalWidth(8),
    backgroundColor: COLORS.WHITE,
  },
  authBox: {
    backgroundColor: COLORS.WHITE,
    paddingVertical: GetOptimalHieght(10),
    paddingHorizontal: GetOptimalWidth(10),
    borderRadius: GetOptimalWidth(16),
    marginTop: GetOptimalHieght(12),
    alignItems: 'center',
    paddingHorizontal: GetOptimalWidth(16),
  },
  inputWrapper: {
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: COLORS.INPUT_BORDER_COLOR,
    width: fullWidth * 0.75,
    height: 0.058 * fullHeight,
    // height: INPUT_HEIGHT,
    backgroundColor: COLORS.WHITE,
    borderRadius: GetOptimalWidth(40),
    fontSize: scaledFontSize(10),
  },
  inputStyle: {
    flex: 1,
    color: COLORS.PLACE_HOLDER,
    fontSize: scaledFontSize(13),
    fontWeight: '500',
    paddingLeft: GetOptimalWidth(15),
  },
  inputBoxWrapper: {
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: COLORS.GRAY,
    width: fullWidth * 0.75,
    paddingVertical: GetOptimalHieght(5),
    height: INPUTBOX_HEIGHT,
    backgroundColor: COLORS.WHITE,
    borderRadius: GetOptimalWidth(16),
  },
  smallInputWrapper: {
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: COLORS.GRAY,
    width: fullWidth * 0.43,
    paddingVertical: GetOptimalHieght(5),
    height: INPUT_HEIGHT,
    backgroundColor: COLORS.WHITE,
    borderRadius: GetOptimalWidth(5),
  },
  dashedView: {
    borderWidth: 1,
    width: fullWidth * 0.85,
    height: INPUTBOX_HEIGHT,
    borderColor: '#00000029',
    borderStyle: 'dashed',
    borderRadius: GetOptimalWidth(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContent: {
    alignItems: 'center',
  },
  centerAlign: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  resetingText: {
    fontSize: scaledFontSize(12),
    color: COLORS.STORYTITLE,
    marginTop: GetOptimalHieght(40),
    textAlign: 'center',
  },
  forgotPasswordButtonText: {
    fontSize: scaledFontSize(15),
    textAlign: 'center',
    color: COLORS.PRIMARY,
  },
  buttonAltSignupAlt: {
    marginHorizontal: GetOptimalWidth(60),
    width: fullWidth - 60,
    paddingVertical: GetOptimalHieght(20),
    borderRadius: GetOptimalWidth(35),
    backgroundColor: COLORS.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: GetOptimalHieght(30),
  },
  elevatedShadow: {
    shadowColor: alpha(COLORS.BLACK, 0.4),
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: SHADOW_SIZE,
  },
  input: {
    flex: 1,
    fontSize: scaledFontSize(17),
    color: COLORS.BLACK,
    padding: 0,
    paddingHorizontal: GetOptimalWidth(10),
  },
  generalHeading: {
    fontSize: scaledFontSize(18),
    // fontFamily: 'Poppins',
    fontWeight: '600',
  },
});

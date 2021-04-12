import { StyleSheet, Platform } from 'react-native';
import { commonStyle as cs, fullWidth, GetOptimalWidth,scaledFontSize, GetOptimalHieght } from '../../common/styles';
import COLORS from '../../common/colors';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    paddingTop: 20
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  authBox: {
    backgroundColor: COLORS.WHITE,
    padding: 16,
    borderRadius: 16,
  },
  aboutContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabLabelContainer: {
    width: fullWidth / 2,
    height: 52,
    marginTop: -3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    color: COLORS.PRIMARY_BLUE,
//     fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: scaledFontSize(9),
  },
  tab: {
    width: fullWidth / 2,
    height: 57,
    borderTopColor: COLORS.PLACE_HOLDER,
    borderTopWidth: 0.2,
  },
  redButton: {
    margin: 5,
    backgroundColor: COLORS.PRIMARY_RED,
    padding: Platform.OS === 'ios' ? 12 : 10,
    borderRadius: 25,
  },
  redButtonText: {
    textAlign: 'center',
    fontSize: 14,
//     fontFamily: 'Poppins',
    fontWeight: '600',
    color: COLORS.WHITE,
  },
  reviewedHeadingText: {
    fontSize: scaledFontSize(18),
    fontWeight: '600',
    color: COLORS.PRIMARY_BLUE,
    paddingHorizontal: 50,
    textAlign: 'center',
    paddingVertical: 16,
  },
  reviewedText: {
    textAlign: 'center',
    paddingVertical: GetOptimalHieght(16),
    paddingHorizontal: GetOptimalWidth(50),
    fontSize: scaledFontSize(14),
    fontWeight: '300',
    color: '#969CAA',
  },
  accountContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: GetOptimalWidth(16),
  },
  text: {
    fontSize: scaledFontSize(12),
    color: COLORS.PRIMARY_BLUE,
    fontWeight: '600',
  },
});

export default styles;

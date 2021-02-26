import { Platform, Dimensions } from 'react-native'

const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width
const platform = Platform.OS
const platformStyle = undefined
const isIphoneX =
  platform === 'ios' &&
  ((deviceHeight === 812 || deviceWidth === 812)
    || (deviceHeight === 844 || deviceWidth === 844)
    || (deviceHeight === 896 || deviceWidth === 896)
    || (deviceHeight === 926 || deviceWidth === 926))

export default {
  platformStyle,
  platform,

  // Color
  brandPrimary: '#758C98',
  brandPrimaryLight: '#F9FCFE',
  brandInfo: '#E9F4FA',
  brandSuccess: '#95E3E3',
  brandSecondary: '#90BDC2',
  brandDanger: '#BCFFFF',
  brandWarning: '#09DBDB',
  brandDark: '#7C859F',
  brandLight: '#FFFFFF',
  brandGrey: '#D3D3D3',
  brandGreyLight: '#FBFDFE',
  brandBlack: '#000000',
  brandPink: '#F63A94',
  brandPinkLight: '#FDEFF7',
  brandPurple: '#86799B',
  brandPurpleLight: '#DED5EE',
  brandGreen: '#587C7C',
  brandGreenLight: '#ECF8F7',
  brandBlue: '#3B5998',
  brandBlueSecondary: '#9AB5C4',
  brandRed: '#E46159',
  brandRedDark: '#B51F1F',
  brandBrown: '#4F4747',
  defaultBackgroundColor: '#FFFFFF',
  secondaryBackgroundColor: '#F6F9FC',
  headerBackgroundColor: '#F6F9FC',
  statusBarColor: '#E8EFF9',
  tabBarBackgroundColor: '#F6F9FC',
  activeTintColor: '#007AFF',
  inactiveTintColor: '#000000',

  // Font
  fontBold: 'Roboto-Bold',
  fontLight: 'Roboto-Light',
  fontMedium: 'Roboto-Medium',
  fontRegular: 'Roboto-Regular',

  deviceWidth,
  deviceHeight,
  isIphoneX,
  topSpace: isIphoneX ? 44 : 0,
  bottomSpace: isIphoneX ? 34 : 0,

  shadow: platform === 'ios' ? {
    shadowColor: opacify('#002383', 0.3),
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 1,
    shadowOpacity: 1
  } : {
    elevation: 1
  }
}

export function opacify(color = '#ffffff', opacity = 1) {
  const o = Math.round(opacity * 256)
  const hexOpacity = o.toString(16)
  return color.concat(hexOpacity)
}

import { Platform } from 'react-native'
import platform from '../helpers/platform'
import BackIcon from '../components/icons/BackIcon'
import { DefaultTheme } from '@react-navigation/native'

export const StackStyle = {
  headerBackTitle: ' ',
  headerBackImage: BackIcon,
  headerTitleAlign: 'left',
  headerTitle: '',
  headerTintColor: platform.brandLight,
  gesturesEnabled: false,
  headerForceInset: Platform.OS === 'ios' ? true : undefined,
  headerStyle: {
    height: 56,
    backgroundColor: platform.headerBackgroundColor,
    shadowColor: 'transparent'
  }
}

export const TabsStyle = {
  keyboardHidesTabBar: true,
  labelPosition: 'beside-icon',
  tabStyle: {
    borderWidth: 1,
    borderColor: platform.brandBlack
  },
  style: {
    backgroundColor: platform.tabBarBackgroundColor,
    borderTopWidth: 0
  }
}

export const NavigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: platform.defaultBackgroundColor
  }
}

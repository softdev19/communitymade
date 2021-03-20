import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import OnBoardingScreen from '../screens/OnBoardingScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import SetPasswordScreen from '../screens/SetPasswordScreen';
import OnboardingAddressScreen from '../screens/OnboardingAddressScreen'
import SignupScreen from '../screens/SignupScreen'
import SigninScreen from '../screens/SigninScreen'
import OnboardingSkillsScreen from '../screens/OnboardingSkillsScreen'
import { StackStyle } from './themes'
import TabsStack from './TabsStack'

const Stack = createStackNavigator();

function MainStack({ initialRouteName }) {
  return (
    <Stack.Navigator
      screenOptions={StackStyle}
      initialRouteName={initialRouteName}
    >
      <Stack.Screen
        name="Login"
        component={TabsStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={SignupScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPasswordScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SetPassword"
        component={SetPasswordScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OnboardingAddress"
        component={OnBoardingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OnboardingSkills"
        component={OnboardingSkillsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={TabsStack}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default MainStack;

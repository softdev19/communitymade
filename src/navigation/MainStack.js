import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import OnboardingAddressScreen from '../screens/OnboardingAddressScreen'
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
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OnboardingAddress"
        component={OnboardingAddressScreen}
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

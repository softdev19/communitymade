import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import SettingsScreen from '../screens/SettingsScreen'
import { StackStyle } from './themes'

const Stack = createStackNavigator();

function SettingsStack() {
  return (
    <Stack.Navigator screenOptions={StackStyle}>
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default SettingsStack;

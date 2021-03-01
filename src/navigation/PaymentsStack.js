import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import PaymentsScreen from '../screens/PaymentsScreen'
import { StackStyle } from './themes'

const Stack = createStackNavigator();

function PaymentsStack() {
  return (
    <Stack.Navigator screenOptions={StackStyle}>
      <Stack.Screen
        name="Payments"
        component={PaymentsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default PaymentsStack;

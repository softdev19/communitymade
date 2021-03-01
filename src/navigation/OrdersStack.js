import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import OrdersScreen from '../screens/OrdersScreen'
import { StackStyle } from './themes'

const Stack = createStackNavigator();

function OrdersStack() {
  return (
    <Stack.Navigator screenOptions={StackStyle}>
      <Stack.Screen
        name="Orders"
        component={OrdersScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default OrdersStack;

import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import OrdersScreen from '../screens/OrdersScreen'
import OrderDetailsScreen from '../screens/OrderDetailsScreen'
import OrderNewDetailsScreen from '../screens/OrderNewDetailsScreen'
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
      <Stack.Screen
        name="OrderDetails"
        component={OrderDetailsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OrderNewDetails"
        component={OrderNewDetailsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default OrdersStack;

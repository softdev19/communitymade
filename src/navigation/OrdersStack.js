import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import OrdersScreen from '../screens/OrdersScreen'
import ActiveOrderDetailsScreen from '../screens/ActiveOrderDetailsScreen';
import AvaiableOrderDetailsScreen from '../screens/AvaiableOrderDetailsScreen';
import OrderNewDetailsScreen from '../screens/OrderNewDetailsScreen'
import AllOrdersScreen from '../screens/AllOrdersScreen'
import OrderSuccessScreen from '../screens/OrderSuccessScreen'
import ReviewTaskDetailsScreen from '../screens/ReviewTaskDetailsScreen';
import { StackStyle } from './themes'

const Stack = createStackNavigator();

function OrdersStack() {
  return (
    <Stack.Navigator screenOptions={StackStyle}>
      <Stack.Screen
        name="Orders"
        component={AllOrdersScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OrderDetails"
        component={ActiveOrderDetailsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AvaiableOrderDetailsScreen"
        component={AvaiableOrderDetailsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ReviewTaskDetailsScreen"
        component={ReviewTaskDetailsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OrderNewDetails"
        component={OrderNewDetailsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OrderSuccess"
        component={OrderSuccessScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default OrdersStack;

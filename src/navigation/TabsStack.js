import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useTranslation } from 'react-i18next'

import OrdersStack from './OrdersStack'
import PaymentsStack from './PaymentsStack'
import SettingsStack from './SettingsStack'
import { TabsStyle } from './themes'
import TabLabel from '../components/atoms/TabLabel'

const Tab = createBottomTabNavigator();

function TabsStack() {
  const { t } = useTranslation('tabs')
  return (
    <Tab.Navigator tabBarOptions={TabsStyle} initialRouteName="Search">
      <Tab.Screen
        name="Orders"
        component={OrdersStack}
        options={{
          tabBarLabel: props => <TabLabel name={t('orders')} {...props} />
        }}
      />
      <Tab.Screen
        name="Payments"
        component={PaymentsStack}
        options={{
          tabBarLabel: props => <TabLabel name={t('payments')} {...props} />
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsStack}
        options={{
          tabBarLabel: props => <TabLabel name={t('settings')} {...props} />
        }}
      />
    </Tab.Navigator>
  );
}

export default TabsStack;

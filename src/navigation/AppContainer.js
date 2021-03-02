import React, { useRef, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'

import MainStack from './MainStack'
import { NavigationTheme } from './themes'

function AppContainer() {
  const routeNameRef = useRef();
  const navigationRef = useRef();
  const [initialRouteName, setInitialRouteName] = useState()
  return (
    <NavigationContainer
      ref={navigationRef}
      theme={NavigationTheme}
      onReady={() => routeNameRef.current = navigationRef.current.getCurrentRoute().name}
      onStateChange={() => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.current.getCurrentRoute().name
        if (previousRouteName !== currentRouteName) {

        }
        routeNameRef.current = currentRouteName;
      }}
    >
      <MainStack initialRouteName={initialRouteName} />
    </NavigationContainer>
  );
}

export default AppContainer

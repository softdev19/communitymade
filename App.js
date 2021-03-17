import React from 'react'
import { StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import Thunk from 'redux-thunk'
import DropdownAlert from 'react-native-dropdownalert';

import ToastCustom from './src/components/atoms/ToastCustom'
import FullScreenBlockSpinner from './src/components/molecules/FullScreenBlockSpinner'

import './src/helpers/i18n'
import rootReducer from './src/rootReducer'
import platform from './src/helpers/platform'
import { DropDownHolder } from './src/components';

const store = createStore(rootReducer, applyMiddleware(Thunk))

import AppContainer from './src/navigation/AppContainer'

console.disableYellowBox = true;

const App: () => React$Node = () => {
  return (
    <>
      <Provider store={store}>
        <StatusBar
          backgroundColor={platform.statusBarColor}
          barStyle="dark-content"
        />
        <FullScreenBlockSpinner>
          <AppContainer />
          <DropdownAlert ref={(ref) => DropDownHolder.setDropDown(ref)}/>
        </FullScreenBlockSpinner>
      </Provider>
      <ToastCustom />
    </>
  );
};

export default App;

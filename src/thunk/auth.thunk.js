import {
  userLoginRequest,
  userLoginSuccess,
  userLoginFailure,
  userSignupRequest,
  userSignupSuccess,
  userSignupFailure,
  setUiBlock,
  updateUserInfo,
} from '../actions';

import { navigate, resetNavigation } from '../navigation/NavigationService';
import AsyncStorage from '@react-native-community/async-storage';
import { API, SERVER_URL, END_POINTS } from '../services';
import ShowError from '../helpers/ShowError';
import ShowSuccess from '../helpers/ShowSuccess';

export function userLogin(data) {
  return function(dispatch) {
    dispatch(userLoginRequest());
    dispatch(setUiBlock(true));

    return API.fetch({
      method: 'post',
      url: `${SERVER_URL}${END_POINTS.LOGIN}`,
      data: data
    })
      .then((response) => {
        let token = response?.data?.token;
        dispatch(updateUserInfo({...response?.data?.user, token}));
        dispatch(setUiBlock(false));
        ShowSuccess('User logged in successfully');
        console.log('user', response)
        AsyncStorage.setItem('token', `${'Bearer ' + token}`);
        return response;
      })
      .catch((error) => {
         __DEV__ && console.log('userLogin',error);
        dispatch(userLoginFailure(error));
        dispatch(setUiBlock(false));
        ShowError(error);
        throw error;
      })
  }
}

export function userSignup(data, navigation) {
  return function(dispatch) {
    dispatch(userSignupRequest());
    dispatch(setUiBlock(true));

    return API.fetch({
      method: 'post',
      url: `${SERVER_URL}${END_POINTS.SIGNUP}`,
      data: data
    })
      .then((response) => {
        __DEV__ && console.log(response);
        dispatch(updateUserInfo(response?.data));
        dispatch(setUiBlock(false));
        ShowSuccess('User created successfully');
        let token = response?.data?.token;
        AsyncStorage.setItem('token', `${'Bearer ' + token}`);
        navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }]
        });
        return response;
      })
      .catch((error) => {
        __DEV__ && console.log(error);
        dispatch(userSignupFailure(error));
        dispatch(setUiBlock(false));
        ShowError(error);
        throw error;
      })
  }
}


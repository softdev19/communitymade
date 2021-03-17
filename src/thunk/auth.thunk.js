import {
  userLoginRequest,
  userLoginSuccess,
  userLoginFailure,
  userSignupRequest,
  userSignupSuccess,
  userSignupFailure,
  setUiBlock,
} from '../actions';

import { navigate } from '../navigation/NavigationService';
import { API, SERVER_URL, END_POINTS } from '../services';
import ShowError from '../helpers/ShowError';
import ShowSuccess from '../helpers/ShowSuccess';

export function userLogin(data) {
  return function(dispatch) {
    dispatch(userLoginRequest());
    dispatch(setUiBlock(true));

    return API.fetch({
      method: 'post',
      url: `${SERVER_URL}${END_POINTS.SIGNUP}`,
      data: data
    })
      .then((response) => {
        dispatch(userLoginSuccess(response));
        dispatch(setUiBlock(false));
        return response;
      })
      .catch((error) => {
         __DEV__ && console.log(error);
        dispatch(userLoginFailure(error));
        dispatch(setUiBlock(false));
        ShowError(error);
        throw error;
      })
  }
}

export function userSignup(data) {
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
        dispatch(userSignupSuccess(response));
        dispatch(setUiBlock(false));
        ShowSuccess('User created successfully');
        navigate('OnboardingSkills');
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


import * as actionTypes from '../constants/actionTypes'

export function updateUserInfo(data) {
  return {
    type: actionTypes.UPDATE_USER_INFO,
    payload: data
  }
}

export function userLoginRequest() {
  return {
    type: actionTypes.USER_LOGIN
  }
}

export function userLoginSuccess(data) {
  return {
    type: actionTypes.USER_LOGIN_SUCCESS,
    payload: data
  }
}

export function userLoginFailure(data) {
  return {
    type: actionTypes.USER_LOGIN_ERROR,
    payload: data
  }
}

export function userSignupRequest() {
  return {
    type: actionTypes.USER_SIGNUP
  }
}

export function userSignupSuccess(data) {
  return {
    type: actionTypes.USER_SIGNUP_SUCCESS,
    payload: data
  }
}

export function userSignupFailure(data) {
  return {
    type: actionTypes.USER_SIGNUP_ERROR,
    payload: data
  }
}

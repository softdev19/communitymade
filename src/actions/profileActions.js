import * as actionTypes from '../constants/actionTypes'

export function updateUserProfileRequest() {
  return {
    type: actionTypes.UPDATE_USER_PROFILE_REQUEST,
  }
}

export function updateUserProfileSuccess(data) {
  return {
    type: actionTypes.UPDATE_USER_PROFILE_SUCCESS,
    payload: data
  }
}

export function updateUserProfileError() {
  return {
    type: actionTypes.UPDATE_USER_PROFILE_ERROR,
  }
}

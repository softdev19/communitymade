import * as actionTypes from '../constants/actionTypes'

export function updateUserInfo(data) {
  return {
    type: actionTypes.UPDATE_USER_INFO,
    payload: data
  }
}

import * as actionTypes from '../constants/actionTypes'

export function fetchPodsRequest() {
  return {
    type: actionTypes.FETCH_PODS_REQUEST,
  }
}

export function fetchPodsSuccess(data) {
  return {
    type: actionTypes.FETCH_PODS_SUCCESS,
    payload: data
  }
}

export function fetchPodsError() {
  return {
    type: actionTypes.FETCH_PODS_ERROR,
  }
}


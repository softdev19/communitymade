import * as actionTypes from '../constants/actionTypes'

export function fetchActiveWorkOrdersRequest() {
  return {
    type: actionTypes.FETCH_ACTIVE_WORK_ORDERS_REQUEST,
  }
}

export function fetchActiveWorkOrdersSuccess(data) {
  return {
    type: actionTypes.FETCH_ACTIVE_WORK_ORDERS_SUCCESS,
    payload: data
  }
}

export function fetchActiveWorkOrdersError() {
  return {
    type: actionTypes.FETCH_ACTIVE_WORK_ORDERS_ERROR,
  }
}

export function fetchAvailableWorkOrdersRequest() {
  return {
    type: actionTypes.FETCH_AVAILABLE_WORK_ORDERS_REQUEST,
  }
}

export function fetchAvailableWorkOrdersSuccess(data) {
  return {
    type: actionTypes.FETCH_AVAILABLE_WORK_ORDERS_SUCCESS,
    payload: data
  }
}

export function fetchAvailableWorkOrdersError() {
  return {
    type: actionTypes.FETCH_AVAILABLE_WORK_ORDERS_ERROR,
  }
}

export function fetchWaitingReviewWorkOrdersRequest() {
  return {
    type: actionTypes.FETCH_WAITING_FOR_REVIEW_WORK_ORDERS_REQUEST,
  }
}

export function fetchWaitingReviewWorkOrdersSuccess(data) {
  return {
    type: actionTypes.FETCH_WAITING_FOR_REVIEW_WORK_ORDERS_SUCCESS,
    payload: data
  }
}

export function fetchWaitingReviewWorkOrdersError() {
  return {
    type: actionTypes.FETCH_WAITING_FOR_REVIEW_WORK_ORDERS_ERROR,
  }
}

export function fetchAllSkillsRequest() {
  return {
    type: actionTypes.FETCH_ALL_SKILLS_REQUEST,
  }
}

export function fetchAllSkillsSuccess(data) {
  return {
    type: actionTypes.FETCH_ALL_SKILLS_SUCCESS,
    payload: data
  }
}

export function fetchAllSkillsError() {
  return {
    type: actionTypes.FETCH_ALL_SKILLS_ERROR,
  }
}

export function fetchSkillByIdRequest() {
  return {
    type: actionTypes.FETCH_SKILL_BY_ID_REQUEST,
  }
}

export function fetchSkillByIdSuccess(data) {
  return {
    type: actionTypes.FETCH_SKILL_BY_ID_SUCCESS,
    payload: data
  }
}

export function fetchSkillByIdError() {
  return {
    type: actionTypes.FETCH_SKILL_BY_ID_ERROR,
  }
}

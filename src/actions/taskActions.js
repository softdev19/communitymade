import * as actionTypes from '../constants/actionTypes'

export function createTaskRequest() {
  return {
    type: actionTypes.CREATE_TASK_REQUEST,
  }
}

export function createTaskSuccess(data) {
  return {
    type: actionTypes.CREATE_TASK_SUCCESS,
    payload: data
  }
}

export function createTaskError() {
  return {
    type: actionTypes.CREATE_TASK_ERROR,
  }
}

export function updateTaskRequest() {
  return {
    type: actionTypes.UPDATE_TASK_REQUEST,
  }
}

export function updateTaskSuccess(data) {
  return {
    type: actionTypes.UPDATE_TASK_SUCCESS,
    payload: data
  }
}

export function updateTaskError() {
  return {
    type: actionTypes.UPDATE_TASK_ERROR,
  }
}

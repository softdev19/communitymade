import {
  fetchActiveWorkOrdersRequest,
  fetchActiveWorkOrdersSuccess,
  fetchActiveWorkOrdersError,

  fetchAvailableWorkOrdersRequest,
  fetchAvailableWorkOrdersSuccess,
  fetchAvailableWorkOrdersError,

  fetchWaitingReviewWorkOrdersRequest,
  fetchWaitingReviewWorkOrdersSuccess,
  fetchWaitingReviewWorkOrdersError,

  fetchApprovedWorkOrdersRequest,
  fetchApprovedWorkOrdersSuccess,
  fetchApprovedWorkOrdersError,

  fetchAllSkillsRequest,
  fetchAllSkillsSuccess,
  fetchAllSkillsError,

  fetchSkillByIdRequest,
  fetchSkillByIdSuccess,
  fetchSkillByIdError,

  setUiBlock
} from '../actions';

import { navigate } from '../navigation/NavigationService';
import { API, SERVER_URL, END_POINTS } from '../services';
import ShowError from '../helpers/ShowError';
import ShowSuccess from '../helpers/ShowSuccess';
import ShowErrorWithoutParsing from '../helpers/ShowErrorWithoutParsing';

export function getActiveWorkOrders(data) {
  return function(dispatch) {
    dispatch(fetchActiveWorkOrdersRequest());
    return API.fetch({
      method: 'get',
      url: `${SERVER_URL}${END_POINTS.WORK_ORDERS}?userId=${data?.userId}&status=active`
    })
      .then((response) => {
        __DEV__ && console.log(response);
        dispatch(fetchActiveWorkOrdersSuccess(response?.data));
        return response;
      })
      .catch((error) => {
         __DEV__ && console.log(error);
        dispatch(fetchActiveWorkOrdersError());
        dispatch(setUiBlock(false));
        ShowError(error);
        throw error;
      })
  }
}

export function getAvailableWorkOrders(data) {
  return function(dispatch) {
    dispatch(fetchAvailableWorkOrdersRequest());
    return API.fetch({
      method: 'get',
      url: `${SERVER_URL}${END_POINTS.WORK_ORDERS}?userId=${data?.userId}&status=available`
    })
      .then((response) => {
        __DEV__ && console.log(response);
        dispatch(fetchAvailableWorkOrdersSuccess(response?.data));
        return response;
      })
      .catch((error) => {
         __DEV__ && console.log(error);
        dispatch(fetchAvailableWorkOrdersError());
        dispatch(setUiBlock(false));
        ShowError(error);
        throw error;
      })
  }
}

export function getWaitingReviewWorkOrders(data) {
  return function(dispatch) {
    dispatch(fetchWaitingReviewWorkOrdersRequest());
    return API.fetch({
      method: 'get',
      url: `${SERVER_URL}${END_POINTS.WORK_ORDERS}?userId=${data?.userId}&status=review`
    })
      .then((response) => {
        __DEV__ && console.log(response);
        dispatch(fetchWaitingReviewWorkOrdersSuccess(response?.data));
        return response;
      })
      .catch((error) => {
         __DEV__ && console.log(error);
        dispatch(fetchWaitingReviewWorkOrdersError());
        ShowError(error);
        throw error;
      })
  }
}

export function getApprovedWorkOrders(data) {
  return function(dispatch) {
    dispatch(fetchApprovedWorkOrdersRequest());
    return API.fetch({
      method: 'get',
      url: `${SERVER_URL}${END_POINTS.WORK_ORDERS}?userId=${data?.userId}&status=approved`
    })
      .then((response) => {
        __DEV__ && console.log(response);
        dispatch(fetchApprovedWorkOrdersSuccess(response?.data));
        return response;
      })
      .catch((error) => {
         __DEV__ && console.log(error);
        dispatch(fetchApprovedWorkOrdersError());
        ShowError(error);
        throw error;
      })
  }
}

export function getSkillsById(id) {
  return function(dispatch) {
    dispatch(fetchSkillByIdRequest());
    return API.fetch({
      method: 'get',
      url: `${SERVER_URL}${END_POINTS.ALL_SKILLS}/${id}`
    })
      .then((response) => {
        __DEV__ && console.log(response);
        dispatch(fetchSkillByIdSuccess(response?.data));
        return response;
      })
      .catch((error) => {
         __DEV__ && console.log(error);
        dispatch(fetchSkillByIdError());
        dispatch(setUiBlock(false));
        ShowErrorWithoutParsing(error);
        throw error;
      })
  }
}

export function getAllSkills() {
  return function(dispatch) {
    dispatch(fetchAllSkillsRequest());
    return API.fetch({
      method: 'get',
      url: `${SERVER_URL}${END_POINTS.ALL_SKILLS}`
    })
      .then((response) => {
        __DEV__ && console.log(response);
        dispatch(setUiBlock(false));
        dispatch(fetchAllSkillsSuccess(response?.data));
        return response;
      })
      .catch((error) => {
         __DEV__ && console.log(error);
        dispatch(fetchAllSkillsError());
        dispatch(setUiBlock(false));
        ShowError(error);
        throw error;
      })
  }
}


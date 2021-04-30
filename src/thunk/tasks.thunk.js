import {
  createTaskRequest,
  createTaskSuccess,
  createTaskError,
  updateTaskRequest,
  updateTaskSuccess,
  updateTaskError,
  setUiBlock
} from '../actions';

import { navigate, resetNavigation } from '../navigation/NavigationService';
import { API, SERVER_URL, END_POINTS } from '../services';
import ShowError from '../helpers/ShowError';
import ShowSuccess from '../helpers/ShowSuccess';
import ShowErrorWithoutParsing from '../helpers/ShowErrorWithoutParsing';

export function createTask(data, taskDetails, navigation) {
  return function(dispatch) {
    dispatch(createTaskRequest());

    return API.fetch({
      method: 'post',
      url: `${SERVER_URL}${END_POINTS.TASKS}`,
      data: data,
      authorized: true,
    })
      .then((response) => {
        __DEV__ && console.log(response);
        dispatch(createTaskSuccess(response?.data));
        dispatch(setUiBlock(false))
        ShowSuccess('New task created successfully !');
        navigation?.navigate('OrderSuccess', { order: taskDetails, quantity: data?.claimedQuantity });
        return response;
      })
      .catch((error) => {
         __DEV__ && console.log(error);
        dispatch(setUiBlock(false))
        dispatch(createTaskError());
        ShowError(error);
        throw error;
      })
  }
}

export function updateTask(data, showCompletedTaskMsg, navigation) {
  return function(dispatch) {
    dispatch(updateTaskRequest());
    
    return API.fetch({
      method: 'patch',
      url: `${SERVER_URL}${END_POINTS.TASKS}/${data?.taskId}`,
      data: data,
      authorized: true,
    })
      .then((response) => {
        __DEV__ && console.log(response);
        dispatch(updateTaskSuccess(response?.data));
        dispatch(setUiBlock(false))
        if(showCompletedTaskMsg)
          alert('Your task is now In Review. Once it is approved you will receive immediate payment. Feel free to start on another task while you wait.');
        else ShowSuccess('Task updated successfully !');

        navigation.reset({
          index: 0,
          routes: [{ name: 'Home', params: {showCompletedTaskMsg} }]
        });
        return response;
      })
      .catch((error) => {
         __DEV__ && console.log(error);
        dispatch(setUiBlock(false))
        dispatch(updateTaskError());
        ShowError(error);
        throw error;
      })
  }
}

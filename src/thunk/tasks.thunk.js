import {
  createTaskRequest,
  createTaskSuccess,
  createTaskError,
  setUiBlock
} from '../actions';

import { navigate } from '../navigation/NavigationService';
import { API, SERVER_URL, END_POINTS } from '../services';
import ShowError from '../helpers/ShowError';
import ShowSuccess from '../helpers/ShowSuccess';
import ShowErrorWithoutParsing from '../helpers/ShowErrorWithoutParsing';

export function createTask(data) {
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

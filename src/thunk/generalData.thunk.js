import {
  fetchPodsRequest,
  fetchPodsError,
  fetchPodsSuccess,
  setUiBlock
} from '../actions';

import { navigate } from '../navigation/NavigationService';
import { API, SERVER_URL, END_POINTS } from '../services';
import ShowError from '../helpers/ShowError';
import ShowSuccess from '../helpers/ShowSuccess';

export function fetchPods() {
  return function(dispatch) {
    dispatch(fetchPodsRequest());

    return API.fetch({
      method: 'get',
      url: `${SERVER_URL}${END_POINTS.PODS}`
    })
      .then((response) => {
        __DEV__ && console.log(response);
        dispatch(fetchPodsSuccess(response?.data));
        return response;
      })
      .catch((error) => {
         __DEV__ && console.log(error);
        dispatch(fetchPodsError());
        ShowError(error);
        throw error;
      })
  }
}



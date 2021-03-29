import {
  updateUserProfileRequest,
  updateUserProfileSuccess,
  updateUserProfileError,
  setUiBlock
} from '../actions';

import { navigate } from '../navigation/NavigationService';
import { API, SERVER_URL, END_POINTS } from '../services';
import ShowError from '../helpers/ShowError';
import ShowSuccess from '../helpers/ShowSuccess';
import ShowErrorWithoutParsing from '../helpers/ShowErrorWithoutParsing';

export function updateProfile(data) {
  return function(dispatch) {
    dispatch(updateUserProfileRequest());

    return API.fetch({
      method: 'patch',
      url: `${SERVER_URL}${END_POINTS.USERS}/${data.userId}`,
      data: data?.data,
      authorized: true,
    })
      .then((response) => {
        __DEV__ && console.log(response);
        dispatch(updateUserProfileSuccess(response?.data));
        dispatch(setUiBlock(false))
        return response;
      })
      .catch((error) => {
         __DEV__ && console.log(error);
        dispatch(setUiBlock(false))
        dispatch(updateUserProfileError());
        ShowError(error);
        throw error;
      })
  }
}

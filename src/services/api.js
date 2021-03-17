import axios from 'axios';
import _ from 'lodash';

class API {
  static headers() {
    return {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  }

  static fetch(options) {
    if (options.authorized != false)
      options.headers = _.merge(this.headers(), options.headers)

    return axios(options).catch(errorResponse => {

      var errorMessages = "";

      if (!options.silent) {
        if (errorResponse.response && errorResponse.response.data.errors) {
          errorMessages = _.join(errorResponse.response.data.errors, "\n");
        } else if (errorResponse.response && errorResponse.response.data.error) {
          errorMessages = errorResponse.response.data.error;
        } else if (errorResponse.response && errorResponse.response.data.message) {
          errorMessages = errorResponse.response.data.message;
        } else if (errorResponse.message == 'Network Error') {
          errorMessages = 'Please check your internet connection and try again.';
        } else if (errorResponse.message) {
          errorMessages = errorResponse.message;
        } else {
          errorMessages = 'Something went wrong, please try again later.';
        }
      }

      throw errorMessages;
    })
  }
}

export {API}

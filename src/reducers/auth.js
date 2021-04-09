import * as actionTypes from '../constants/actionTypes'

const _initialState = {
  user: {
    firstName: null,
    lastName: null,
    email: null,
    password: '',
    addressFirst: null,
    addressSecond: null,
    city: null,
    state: null,
    zip: null,
    phone: null
  }
}

export default function reducer(state = _initialState, { payload, type }) {
  switch (type) {
    case actionTypes.UPDATE_USER_INFO:
      return {
        ...state,
        user: payload
      }
    case actionTypes.UPDATE_USER_PROFILE_SUCCESS:
      let user = {...state?.user};
      user.user = payload?.user;
      return {
        ...state,
        user: user
      }
    default:
      return state
  }
}

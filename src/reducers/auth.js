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
    default:
      return state
  }
}

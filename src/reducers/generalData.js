import * as actionTypes from '../constants/actionTypes'

const _initialState = {
  pods: []
}

export default function reducer(state = _initialState, { payload, type }) {
  switch (type) {
    case actionTypes.FETCH_PODS_SUCCESS:
      return {
        ...state,
        pods: payload
      }

    default:
      return state
  }
}

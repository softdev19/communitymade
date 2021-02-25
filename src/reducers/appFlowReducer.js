import * as actionTypes from '../constants/actionTypes'

const _initialState = {
  uiBlock: false
}

export default function reducer(state = _initialState, { payload, type }) {
  switch (type) {
    case actionTypes.UI_BLOCK:
      return {
        ...state,
        uiBlock: payload
      }

    default:
      return state
  }
}

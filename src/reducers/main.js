import * as actionTypes from '../constants/actionTypes'
import { TAKEN, NO_TAKEN } from '../constants/types'

const _initialState = {
  pillData: [],
  sideEffectsData: {},
  pillTodayDate: null
}

export default function reducer(state = _initialState, { payload, type }) {
  switch (type) {
    case actionTypes.UPDATE_SIDE_EFFECT:
      return {
        ...state,
        sideEffectsData: payload
      }
    case actionTypes.SET_PILL_TODAY_DATE:
      return {
        ...state,
        pillTodayDate: payload
      }
    case actionTypes.UPDATE_PILL_DATA:
      return {
        ...state,
        pillData: payload
      }
    case actionTypes.UPDATE_MAIN_REDUCER:
      return {
        ...state,
        ...payload
      }
    default:
      return state
  }
}

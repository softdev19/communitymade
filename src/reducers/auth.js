import * as actionTypes from '../constants/actionTypes'

const _initialState = {
  user: {
    // username: null,
    // email: null,
    // password: null,
    birthday: '01/01/1960',
    height: null,
    weight: null,
    pills_on_strip: null,
    stop_days: '1',
    start_date: null,
    pill_type: null,
    pill_dosage: null,
    reminder_time: null,
    is_stopweek: false
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

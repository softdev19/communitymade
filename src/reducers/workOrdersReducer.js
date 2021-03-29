import * as actionTypes from '../constants/actionTypes'

const _initialState = {
  activeOrders: [],
  availableOrders: [],
  allSkills: [],
  fetchedSkillDetails: {}
}

export default function reducer(state = _initialState, { payload, type }) {
  switch (type) {
    case actionTypes.FETCH_ACTIVE_WORK_ORDERS_REQUEST:
      return {
        ...state,
        activeWorkOrdersFetchSuccess: false,
      }
    case actionTypes.FETCH_ACTIVE_WORK_ORDERS_SUCCESS:
      return {
        ...state,
        activeWorkOrdersFetchSuccess: true,
        activeOrders: payload,
      }
    case actionTypes.FETCH_ACTIVE_WORK_ORDERS_ERROR:
      return {
        ...state,
        activeWorkOrdersFetchSuccess: false
      }
    
    case actionTypes.FETCH_AVAILABLE_WORK_ORDERS_REQUEST:
      return {
        ...state,
        availableWorkOrdersFetchSuccess: false,
      }

    case actionTypes.FETCH_AVAILABLE_WORK_ORDERS_ERROR:
      return {
        ...state,
        availableWorkOrdersFetchSuccess: false
      }

    case actionTypes.FETCH_AVAILABLE_WORK_ORDERS_SUCCESS:
      return {
        ...state,
        availableWorkOrdersFetchSuccess: true,
        availableOrders: payload
      }
    
    case actionTypes.FETCH_ALL_SKILLS_SUCCESS:
      return {
        ...state,
        allSkills: payload
      }

    case actionTypes.FETCH_SKILL_BY_ID_SUCCESS:
      return {
        ...state,
        fetchedSkillDetails: payload
      }

    default:
      return state
  }
}

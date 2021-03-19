import { combineReducers } from 'redux'

import appFlow from './reducers/appFlowReducer'
import auth from './reducers/auth'
import generalData from './reducers/generalData'

const rootReducer = combineReducers({
  appFlow,
  auth,
  generalData
})

export default rootReducer

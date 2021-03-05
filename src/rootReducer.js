import { combineReducers } from 'redux'

import appFlow from './reducers/appFlowReducer'
import auth from './reducers/auth'

const rootReducer = combineReducers({
  appFlow,
  auth
})

export default rootReducer

import { combineReducers } from 'redux'

import appFlow from './reducers/appFlowReducer'
import auth from './reducers/auth'
import generalData from './reducers/generalData'
import workOrders from './reducers/workOrdersReducer'

const rootReducer = combineReducers({
  appFlow,
  auth,
  generalData,
  workOrders
})

export default rootReducer

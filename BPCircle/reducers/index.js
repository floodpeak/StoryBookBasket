import { combineReducers } from 'redux'
import bpStatus from './bpStatus'
import discoveryConnectState from './discoveryConnect'

const rootReducer = combineReducers({
  discoveryConnectState
})

export default rootReducer

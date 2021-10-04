import { combineReducers } from "redux"
import auth from './auth'
import deviceReducer from "./devices";


const rootReducer = combineReducers({
  auth:auth,
  device:deviceReducer
})

export default rootReducer;
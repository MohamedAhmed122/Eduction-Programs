import { combineReducers } from "redux";
import AuthReducer from './Auth/AuthReducer'

const rootReducer = combineReducers({
  auth : AuthReducer
})

export default rootReducer

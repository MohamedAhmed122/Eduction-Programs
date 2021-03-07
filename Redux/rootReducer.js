import { combineReducers } from "redux";

import { persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";

import AuthReducer from './Auth/AuthReducer'

const persistConfig = {
  key: "Auth",
  storage,
  whiteList: ["auth"],
};


const rootReducer = combineReducers({
  auth : AuthReducer
})

export default persistReducer(persistConfig, rootReducer);


import { combineReducers } from "redux";

import { persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";

import AuthReducer from './Auth/AuthReducer'
import { getProfileReducer } from './profile/profileReducer'

const persistConfig = {
  key: "Auth",
  storage,
  whiteList: ["auth"],
};


const rootReducer = combineReducers({
  auth : AuthReducer,
  profile: getProfileReducer,
})

export default persistReducer(persistConfig, rootReducer);


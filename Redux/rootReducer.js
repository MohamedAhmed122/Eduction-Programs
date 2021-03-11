import { combineReducers } from "redux";

import { persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";

import AuthReducer from './Auth/AuthReducer'
import { 
  getProfileReducer,  
  getAvatarReducer, 
  updateProfileReducer, 
} from './profile/profileReducer'

const persistConfig = {
  key: "Auth",
  storage,
  whiteList: ["auth"],
};


const rootReducer = combineReducers({
  auth : AuthReducer,
  profile: getProfileReducer,
  avatar : getAvatarReducer,
  updateProfile : updateProfileReducer,


})

export default persistReducer(persistConfig, rootReducer);


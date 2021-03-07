import { createStore, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'

// import { composeWithDevTools } from 'redux-devtools-extension'
import {persistStore} from 'redux-persist'

import logger from "redux-logger";

import rootReducer from './rootReducer';


const middleware = [logger,thunk];

export const store = createStore(rootReducer, applyMiddleware(...middleware));

export const persistor  = persistStore(store)
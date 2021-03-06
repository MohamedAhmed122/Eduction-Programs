import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// import { composeWithDevTools } from 'redux-devtools-extension'
import logger from "redux-logger";
import rootReducer from './rootReducer';


const middleware = [logger,thunk];

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
import { createStore, combineReducers, applyMiddleware } from "redux";
// import * as actionType from './actions/actionType'

import thunk from "redux-thunk";
import programReducer from "./reducers/programsReducer";

const middleware = [thunk];
const allReducer = combineReducers({
  programReducer: programReducer,
});

const store = createStore(allReducer, applyMiddleware(...middleware));

export default store;
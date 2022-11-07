import {applyMiddleware, combineReducers, createStore} from "redux";
import {todoReducer} from "./reducers";
import thunk from "redux-thunk";

const rootReducer = combineReducers({todoReducer});

export const store = createStore(rootReducer, applyMiddleware(thunk));
import {applyMiddleware, combineReducers, createStore} from "redux";
import {alertReducer, todoReducer} from "./reducers";
import thunk from "redux-thunk";

const rootReducer = combineReducers({todoReducer, alertReducer});

export const store = createStore(rootReducer, applyMiddleware(thunk));
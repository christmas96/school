import { combineReducers } from 'redux';
// import visibilityFilter from "./visibilityFilter";
// import todos from "./todos";
import { reducers as screens } from 'Screen'

export const reducer = combineReducers({ ...screens });

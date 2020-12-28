import { combineReducers } from 'redux';

import programs from "./programs/reducer";

const combineReducer = combineReducers({
  programs: programs,
})

export default combineReducer;
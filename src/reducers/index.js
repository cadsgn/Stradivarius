import {combineReducers} from 'redux';

import markerReducer from './markerReducer';

const rootReducer = combineReducers({
  markers: markerReducer,
});

export default rootReducer;
// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import playPauseKeyActive from './mediaKeys';
import stations from './stations';

const rootReducer = combineReducers({
  playPauseKeyActive,
  stations,
  router,
});

export default rootReducer;

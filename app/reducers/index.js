// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import playPauseKeyActive from './mediaKeys';

const rootReducer = combineReducers({
  playPauseKeyActive,
  router,
});

export default rootReducer;

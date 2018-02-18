// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import playpause from './playpause';

const rootReducer = combineReducers({
  counter,
  playpause,
  router,
});

export default rootReducer;

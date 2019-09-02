import { combineReducers } from 'redux';

import employees from './employees';
import states from './states';
const reducers = combineReducers({
  employees,
  states,
});

export default reducers;

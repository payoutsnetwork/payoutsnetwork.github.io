import statesActions from './actions';
import { call, put, all } from 'redux-saga/effects';

export function* getStates(api) {
  try {
    const response = yield call(api.getStates);
    yield all([put(statesActions.getStatesSuccess(response))]);
  } catch (e) {
    console.log('get states error: ', e);
    yield all([put(statesActions.getStatesFailure(e))]);
  }
}

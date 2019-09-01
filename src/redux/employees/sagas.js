import employeesActions from './actions';
import {call, put, all} from 'redux-saga/effects';

export function* getEmployees(api) {
  try {
    const response = yield call(api.getEmployees);
    yield all([put(employeesActions.getEmployeesSuccess(response))]);
  } catch (e) {
    console.log('get employees error: ', e);
    yield all([put(employeesActions.getEmployeesFailure(e))]);
  }
}

export function* postEmployees(api, data) {
  try {
    const response = yield call(api.postEmployees, data);
    yield all([put(employeesActions.postEmployeesSuccess(response))]);
  } catch (e) {
    console.log('post employees error: ', e);
    yield all([put(employeesActions.postEmployeesFailure(e))]);
  }
}

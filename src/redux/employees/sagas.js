import employeesActions from './actions';
import { call, put, all } from 'redux-saga/effects';

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
    yield all([
      put(employeesActions.postEmployeesSuccess(response)),
      put(employeesActions.clearEmployeesError()),
    ]);
  } catch (e) {
    console.log('post employees error: ', e);
    yield all([put(employeesActions.postEmployeesFailure(e))]);
  }
}

export function* deleteEmployees(api, data) {
  try {
    const response = yield call(api.deleteEmployees, data);
    yield all([
      put(employeesActions.deleteEmployeesSuccess(response)),
      put(employeesActions.getEmployees()),
    ]);
  } catch (e) {
    console.log('delete employees error: ', e);
    yield all([put(employeesActions.deleteEmployeesFailure(e))]);
  }
}

export function* patchEmployees(api, data) {
  try {
    const response = yield call(api.patchEmployees, data);
    yield all([
      put(employeesActions.patchEmployeesSuccess(response)),
      put(employeesActions.getEmployees()),
    ]);
  } catch (e) {
    console.log('patch employees error: ', e);
    yield all([put(employeesActions.patchEmployeesFailure(e))]);
  }
}

export function* clearEmployeesError(api, data) {
  try {
    yield all([put(employeesActions.clearEmployeesError())]);
  } catch (e) {
    console.log('can not clear error: ', e);
  }
}

export function* clearEmployeesSuccess(api, data) {
  try {
    yield all([put(employeesActions.clearEmployeesSuccess())]);
  } catch (e) {
    console.log('can not clear success: ', e);
  }
}

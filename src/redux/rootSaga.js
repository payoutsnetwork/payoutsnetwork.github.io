import {takeLatest} from 'redux-saga/effects';

/* ------ Action Types ------ */
import {types as employeeActionTypes} from './employees/actions';

/* ------ Sagas ------ */
import {getEmployees, postEmployees, deleteEmployees, patchEmployees} from './employees/sagas'

/* ------ API ------ */
import {API} from '../services/api';

export default function* root() {
  yield takeLatest(employeeActionTypes.GET_EMPLOYEES, getEmployees, API);
  yield takeLatest(employeeActionTypes.POST_EMPLOYEES, postEmployees, API);
  yield takeLatest(employeeActionTypes.DELETE_EMPLOYEES, deleteEmployees, API);
  yield takeLatest(employeeActionTypes.PATCH_EMPLOYEES, patchEmployees, API);
}

import {takeLatest} from 'redux-saga/effects';

/* ------ Action Types ------ */
import {types as employeeActionTypes} from './employees/actions';

/* ------ Sagas ------ */
import {getEmployees, postEmployees} from './employees/sagas'

/* ------ API ------ */
import {API} from '../services/api';

export default function* root() {
  yield takeLatest(employeeActionTypes.GET_EMPLOYEES, getEmployees, API);
  yield takeLatest(employeeActionTypes.POST_EMPLOYEES, postEmployees, API);
}

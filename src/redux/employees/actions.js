const GET_EMPLOYEES = 'get_employees';
const GET_EMPLOYEES_SUCCESS = 'get_employees_success';
const GET_EMPLOYEES_FAILURE = 'get_employees_failure';

const POST_EMPLOYEES = 'post_employees';
const POST_EMPLOYEES_SUCCESS = 'post_employees_success';
const POST_EMPLOYEES_FAILURE = 'post_employees_failure';

const DELETE_EMPLOYEES = 'delete_employees';
const DELETE_EMPLOYEES_SUCCESS = 'delete_employees_success';
const DELETE_EMPLOYEES_FAILURE = 'delete_employees_failure';

const PATCH_EMPLOYEES = 'patch_employees';
const PATCH_EMPLOYEES_SUCCESS = 'patch_employees_success';
const PATCH_EMPLOYEES_FAILURE = 'patch_employees_failure';

export const types = {
  GET_EMPLOYEES,
  GET_EMPLOYEES_SUCCESS,
  GET_EMPLOYEES_FAILURE,

  POST_EMPLOYEES,
  POST_EMPLOYEES_SUCCESS,
  POST_EMPLOYEES_FAILURE,

  DELETE_EMPLOYEES,
  DELETE_EMPLOYEES_SUCCESS,
  DELETE_EMPLOYEES_FAILURE,

  PATCH_EMPLOYEES,
  PATCH_EMPLOYEES_SUCCESS,
  PATCH_EMPLOYEES_FAILURE,

};

export default {
  getEmployees: data => ({ type: GET_EMPLOYEES, data }),
  getEmployeesSuccess: payload => ({ type: GET_EMPLOYEES_SUCCESS, payload }),
  getEmployeesFailure: payload => ({ type: GET_EMPLOYEES_FAILURE, payload }),

  postEmployees: data => ({ type: POST_EMPLOYEES, data }),
  postEmployeesSuccess: payload => ({ type: POST_EMPLOYEES_SUCCESS, payload }),
  postEmployeesFailure: payload => ({ type: POST_EMPLOYEES_FAILURE, payload }),

  deleteEmployees: data => ({ type: DELETE_EMPLOYEES, data }),
  deleteEmployeesSuccess: payload => ({ type: DELETE_EMPLOYEES_SUCCESS, payload }),
  deleteEmployeesFailure: payload => ({ type: DELETE_EMPLOYEES_FAILURE, payload }),

  patchEmployees: data => ({ type: PATCH_EMPLOYEES, data }),
  patchEmployeesSuccess: payload => ({ type: PATCH_EMPLOYEES_SUCCESS, payload }),
  patchEmployeesFailure: payload => ({ type: PATCH_EMPLOYEES_FAILURE, payload }),

};

const GET_EMPLOYEES = 'get_employees';
const GET_EMPLOYEES_SUCCESS = 'get_employees_success';
const GET_EMPLOYEES_FAILURE = 'get_employees_failure';

const POST_EMPLOYEES = 'post_employees';
const POST_EMPLOYEES_SUCCESS = 'post_employees_success';
const POST_EMPLOYEES_FAILURE = 'post_employees_failure';

export const types = {
  GET_EMPLOYEES,
  GET_EMPLOYEES_SUCCESS,
  GET_EMPLOYEES_FAILURE,

  POST_EMPLOYEES,
  POST_EMPLOYEES_SUCCESS,
  POST_EMPLOYEES_FAILURE,
};

export default {
  getEmployees: data => ({ type: GET_EMPLOYEES, data }),
  getEmployeesSuccess: payload => ({ type: GET_EMPLOYEES_SUCCESS, payload }),
  getEmployeesFailure: payload => ({ type: GET_EMPLOYEES_FAILURE, payload }),

  postEmployees: data => ({ type: POST_EMPLOYEES, data }),
  postEmployeesSuccess: payload => ({ type: POST_EMPLOYEES_SUCCESS, payload }),
  postEmployeesFailure: payload => ({ type: POST_EMPLOYEES_FAILURE, payload }),
};

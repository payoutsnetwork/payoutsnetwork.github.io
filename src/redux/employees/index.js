import { types } from './actions';

const initialState = {
  error: null,
  getting: false,
  posting: false,
  getEmployeesSuccess: false,
  postEmployeesSuccess: false,
};

export default function(state = {...initialState}, action) {
  switch (action.type) {
    /////////////////////////////////////////////

    case types.GET_EMPLOYEES:
      return { ...state, getEmployeesSuccess: false, getting: true };

    case types.GET_EMPLOYEES_SUCCESS:
      return {
        ...state,
        getEmployeesSuccess: true,
        getting: false,
        employeeList: action.payload,
      };

    case types.GET_EMPLOYEES_FAILURE:
      return {
        ...state,
        getEmployeesSuccess: false,
        getting: false,
        error: action.payload,
      };

    /////////////////////////////////////////////

    case types.POST_EMPLOYEES:
      return { ...state, postEmployeesSuccess: false, posting: true };

    case types.POST_EMPLOYEES_SUCCESS:
      return { ...state, postEmployeesSuccess: true, posting: false };

    case types.POST_EMPLOYEES_FAILURE:
      return { ...state, postEmployeesSuccess: false, posting: false };

    /////////////////////////////////////////////

    default:
      return state;
  }
}

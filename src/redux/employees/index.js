import { types } from './actions';

const initialState = {
  error: null,
  getting: false,
  posting: false,
  deleting: false,
  patching: false,
  getEmployeesSuccess: false,
  postEmployeesSuccess: false,
  deleteEmployeesSuccess: false,
  patchEmployeesSuccess: false,
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

    case types.DELETE_EMPLOYEES:
      return { ...state, deleteEmployeesSuccess: false, deleting: true };

    case types.DELETE_EMPLOYEES_SUCCESS:
      return { ...state, deleteEmployeesSuccess: true, deleting: false };

    case types.DELETE_EMPLOYEES_FAILURE:
      return { ...state, deleteEmployeesSuccess: false, deleting: false };

    /////////////////////////////////////////////
 
    case types.PATCH_EMPLOYEES:
      return { ...state, patchEmployeesSuccess: false, patching: true };

    case types.PATCH_EMPLOYEES_SUCCESS:
      return { ...state, patchEmployeesSuccess: true, patching: false };

    case types.PATCH_EMPLOYEES_FAILURE:
      return { ...state, patchEmployeesSuccess: false, patching: false };

    /////////////////////////////////////////////

    default:
      return state;
  }
}

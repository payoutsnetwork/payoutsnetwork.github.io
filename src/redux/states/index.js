import { types } from './actions';

const initialState = {
  error: null,
  getting: false,
  getStatesSuccess: false,
};

export default function(state = {...initialState}, action) {
  switch (action.type) {

    case types.GET_STATES:
      return { ...state, getStatesSuccess: false, getting: true };

    case types.GET_STATES_SUCCESS:
      return {
        ...state,
        getStatesSuccess: true,
        getting: false,
        statesList: action.payload,
      };

    case types.GET_STATES_FAILURE:
      return {
        ...state,
        getStatesSuccess: false,
        getting: false,
        error: action.payload,
      };

    default:
      return state;
  }
}

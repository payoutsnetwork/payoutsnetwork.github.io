const GET_STATES = 'get_states';
const GET_STATES_SUCCESS = 'get_states_success';
const GET_STATES_FAILURE = 'get_states_failure';

export const types = {
  GET_STATES,
  GET_STATES_SUCCESS,
  GET_STATES_FAILURE,
};

export default {
  getStates: data => ({ type: GET_STATES, data }),
  getStatesSuccess: payload => ({ type: GET_STATES_SUCCESS, payload }),
  getStatesFailure: payload => ({ type: GET_STATES_FAILURE, payload }),
};

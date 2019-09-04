import { mockStore } from '../setupTests';
import { employeeList } from './Common';
//You would import the action from your codebase in a real scenario
//function success() {
//return {
//type: 'FETCH_DATA_SUCCESS'
//}
//}

//function fetchData () {
//return dispatch => {
//return fetch('/users.json')  Some async action with promise
//.then(() => dispatch(success()))
//};
//}

//it('should execute fetch data', () => {

//Return the promise
//return store.dispatch(fetchData())
//.then(() => {
//const actions = store.getActions()
//expect(actions[0]).toEqual(success())
//})
//})

export const userCreateMocks = {
  functions: {
    submitForm: jest.fn(),
  },
  stores: {
    loadingStates: mockStore({
      states: {
        getStatesSuccess: false,
      },
      employees: {
        posting: false,
        //employeeList: employeeList,
      },
    }),
    loadedStates: mockStore({
      states: {
        getStatesSuccess: true,
        statesList: {
          data: [
            {
              id: 1,
              abbreviation: 'MT',
              name: 'Montana',
            },
          ],
        },
      },
      employees: {
        posting: false,
      },
    }),
  },

    formStates: {
        valid: {
            first_name: {
                value: 'test',
                valid: true,
            },
            zip_code: {
                value: '59715',
                valid: true,
            },
            email: {
                value: 'a@a.co',
                valid: true,
            },
            last_name: {
                value: 'test',
                valid: true,
            },
            street_address: {
                value: 'test',
                valid: true,
            },
            city: {
                value: 'test',
                valid: true,
            },
            phone: {
                value: '111-111-1111',
                valid: true,
            },
            state_id: {
                value: 1,
                valid: true,
            },
            status: {
                value: 'active',
                valid: true,
            },
        }
    }
};

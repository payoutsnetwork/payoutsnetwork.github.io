import { mockStore } from '../../../setupTests';
import { employeeList } from '../../../__mocks__/Common';

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

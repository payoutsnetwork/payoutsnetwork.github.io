import {employeeList} from '../../../../__mocks__/Common';

const UserTableData = {
  sortEmployees: jest.fn((newSorted, column, shiftKey) => {
    const columnName = newSorted[0].id;
    return { columnName: columnName };
  }),
  patchEmployee: jest.fn(),
  deleteEmployee: jest.fn(),
  employees: employeeList,
};

export default UserTableData;

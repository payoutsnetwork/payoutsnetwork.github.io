import React from 'react';
import UserTable from '../../../../components/Molecules/UserTable';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';

import '../../../setupTests';
import UserTableData from './__mocks__/UserTable';

test('the snapshot has not changed', () => {
  let tree = create(<UserTable data={UserTableData.employees} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('patch employees is called on clicking an inactive employee', () => {
  let wrapper = mount(
    <UserTable
      data={UserTableData.employees}
      patchEmployee={UserTableData.patchEmployee}
    />
  );
  wrapper.find('svg#jestPatchEmployee').simulate('click');
  expect(UserTableData.patchEmployee).toHaveBeenCalled();
});

test('delete employees is called on clicking an active employee', () => {
  let wrapper = mount(
    <UserTable
      data={UserTableData.employees}
      deleteEmployee={UserTableData.deleteEmployee}
    />
  );
  wrapper.find('svg#jestDeleteEmployee').simulate('click');
  expect(UserTableData.deleteEmployee).toHaveBeenCalled();
});

test('onSortedChange is called with "email" when clicking on email header', () => {
  let wrapper = mount(
    <UserTable
      data={UserTableData.employees}
      onSortedChange={UserTableData.sortEmployees}
    />
  );
  wrapper.find('span#jestSortEmail').simulate('click');
  expect(UserTableData.sortEmployees).toHaveReturnedWith({columnName: 'email'});
});

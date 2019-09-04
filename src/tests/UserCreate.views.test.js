import React from 'react';
import { create } from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import UserCreate from '../views/userCreate';
import { userCreateMocks } from './__mocks__/UserCreate';
import sinon from 'sinon';

import './setupTests';

test('the snapshots have not changed', () => {
  let tree;

  tree = toJSON(
    shallow(<UserCreate store={userCreateMocks.stores.loadingStates} />)
      .find('UserCreate')
      .dive()
  );
  expect(tree).toMatchSnapshot();

  tree = toJSON(
    shallow(<UserCreate store={userCreateMocks.stores.loadedStates} />)
      .find('UserCreate')
      .dive()
  );
  expect(tree).toMatchSnapshot();
});

test('the form does not submit when it fails validation', () => {
  let wrapper = shallow(
    <UserCreate store={userCreateMocks.stores.loadedStates} />
  )
    .find('UserCreate')
    .dive();

  let instance = wrapper.instance();

  let spy = jest.spyOn(instance, '_handleSubmit');
  instance._handleSubmit({ preventDefault() {}, stopPropagation() {} });
  expect(spy).toHaveBeenCalled();
  expect(spy).toHaveReturnedWith('fail');
});

test('the form submits when it passes validation', () => {
  let wrapper = shallow(
    <UserCreate store={userCreateMocks.stores.loadedStates} />
  )
    .find('UserCreate')
    .dive();

  wrapper.setState({ formState: userCreateMocks.formStates.valid });

  let instance = wrapper.instance();

  let spy = jest.spyOn(instance, '_handleSubmit');
  instance._handleSubmit({ preventDefault() {} });
  expect(spy).toHaveBeenCalled();
  expect(spy).toHaveReturnedWith('success');
});

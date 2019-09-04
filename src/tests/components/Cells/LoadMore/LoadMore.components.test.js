import React from 'react';
import LoadMore from '../../../../components/Cells/LoadMore';
import loadMoreMock from './__mocks__/LoadMore.js';
import {create} from 'react-test-renderer';
import {mount} from 'enzyme';

import '../../../setupTests';

test('the snapshot has not changed', () => {
  let tree = create(<LoadMore />).toJSON();
  expect(tree).toMatchSnapshot();

  tree = create(<LoadMore moreExist={loadMoreMock.moreExist} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('hides the link unless moreExist===true', () => {
  let wrapper = mount(<LoadMore />);
  expect(wrapper.find('a#jestLoadMoreLink').exists()).toBeFalsy();
});

test('shows the link when moreExist===true', () => {
  let wrapper = mount(<LoadMore moreExist={true} />);
  expect(wrapper.find('a#jestLoadMoreLink').exists()).toBeTruthy();
});

test('calls onClick when it is clicked', () => {
  let wrapper = mount(
    <LoadMore moreExist={true} onClick={loadMoreMock.onClick} />
  );
  expect(wrapper.find('a#jestLoadMoreLink').exists()).toBeTruthy();

  wrapper.find('a#jestLoadMoreLink').simulate('click');
  expect(loadMoreMock.onClick).toHaveBeenCalled();
});

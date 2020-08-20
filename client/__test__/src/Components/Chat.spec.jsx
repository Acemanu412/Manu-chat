import React from 'react';
import { shallow } from 'enzyme';
import Chat from '../../../src/Components/Chat';

describe('Chat component', () => {
  it('should render', () => {
    const wrapper = shallow(<Chat />);

    expect(wrapper.exists()).toBeTruthy();
  });
});
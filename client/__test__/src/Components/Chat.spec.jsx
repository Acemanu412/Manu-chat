import React from 'react';
import { shallow } from 'enzyme';
import Chat from '../../../src/Components/Chat';
import Messages from '../../../src/Components/main/Messages';
import MessageInput from '../../../src/Components/main/MessageInput';

describe('Chat component', () => {
  const wrapper = shallow(<Chat />);
  it('should render', () => {
    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should render Messages Component', () => {
    expect(wrapper.find(Messages).length).toBe(1);
  })

  it('should render MessageInput Component', () => {
    expect(wrapper.find(MessageInput).length).toBe(1);
  })
});
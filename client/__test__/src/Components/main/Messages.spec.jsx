import React from 'react';
import { shallow, mount } from 'enzyme';
import { MockedProvider } from '@apollo/client/testing';
import { act } from 'react-dom/test-utils';

import Messages from '../../../../src/Components/main/Messages';
import mocks from '../../../../__mocks__/messages-mocks';

describe('Messages component', () => {
    const user = 'Manu';
    const addTypename = false;
  it('should render', () => {
    const wrapper = shallow(<MockedProvider mocks={mocks} addTypename={addTypename}>
                                <Messages user={user}/>
                            </MockedProvider>);

    expect(wrapper.exists()).toBeTruthy();
  });

  it('should render as many messages as messages received from the server', async () => {
    const wrapper = mount(<MockedProvider mocks={mocks} addTypename={addTypename}>
                                <Messages user={user}/>
                            </MockedProvider>);
    const numberOfMessages = mocks[0].result.data.messages.length;

    await act( async() => await new Promise(resolve => setTimeout(resolve, 0)));

    wrapper.update();

    expect(wrapper.find('.message').length).toBe(numberOfMessages);
  }); 
});
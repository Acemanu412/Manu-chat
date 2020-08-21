import React from 'react';
import {  mount } from 'enzyme';
import { MockedProvider } from '@apollo/client/testing';
import { act } from 'react-dom/test-utils';

import Messages from '../../../../src/Components/main/Messages';
import mocks from '../../../../__mocks__/messages-mocks';

describe('Messages component', () => {
    const user = 'Manu';
    const addTypename = false;
    const wrapper = mount(<MockedProvider mocks={mocks} addTypename={addTypename}>
      <Messages user={user}/>
  </MockedProvider>);
  
  it('should render', () => {
    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should render as many messages as messages received from the server', async () => {
    const numberOfMessages = mocks[0].result.data.messages.length;

    await act( async() => await new Promise(resolve => setTimeout(resolve, 0)));

    wrapper.update();

    expect(wrapper.find('.message').length).toBe(numberOfMessages);
  }); 

  it('should render two divs with the class .mine when the user matches the one in the Mock message', () => {
    expect(wrapper.find('.mine').length).toBe(2);
    expect(wrapper.find('.notMine').length).toBe(0);
  })

  const wrapperChangedUser = mount(<MockedProvider mocks={mocks} addTypename={addTypename}>
                                    <Messages user={'Nico'}/>
                                  </MockedProvider>);

  it('should render two divs with the class .notMine when the user does not match the one in the Mock message', async () => {
    await act( async() => await new Promise(resolve => setTimeout(resolve, 0)));
    wrapperChangedUser.update();

    expect(wrapperChangedUser.find('.notMine').length).toBe(2);
    expect(wrapperChangedUser.find('.mine').length).toBe(0);
  })

  it('should render a div with a text equal to the first two letters of the messageUser in uppercase', async () => {
    await act( async() => await new Promise(resolve => setTimeout(resolve, 0)));
    wrapperChangedUser.update();

    expect(wrapperChangedUser.find('.userLetters').text()).toBe(user.slice(0,2).toUpperCase());
  })
});
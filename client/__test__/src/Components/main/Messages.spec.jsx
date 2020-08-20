import React from 'react';
import { shallow } from 'enzyme';
import { MockedProvider } from '@apollo/client/testing';

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
});
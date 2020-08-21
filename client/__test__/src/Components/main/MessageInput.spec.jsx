import React from 'react';
import { mount } from 'enzyme';
import { MockedProvider } from '@apollo/client/testing';
import { Form, FormInput, Button } from 'shards-react';
import { act } from 'react-dom/test-utils';

import MessageInput from '../../../../src/Components/main/MessageInput';
import mocks from '../../../../__mocks__/messages-mocks';

describe('MessageInput component', () => {
    const user = 'Manu';
    const setUser = jest.fn(name => { return name});
    const changeEvent = {
        target: { value: "Test"},
    };
    const submitEvent = {
        target:[{ value: "Test" }],
    }
    const addTypename = false;
    const postMessage = jest.fn( () => ({ data: {}}));
    mocks[1].result = postMessage;
    const wrapper = mount(<MockedProvider mocks={mocks} addTypename={addTypename}>
                            <MessageInput user={user} setUser={setUser} />
                        </MockedProvider>)

    it('should render', () => {
        expect(wrapper.exists()).toBeTruthy();
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('should render 1 Form, 2 FormInputs, and 1 Button', () => {
        expect(wrapper.find(Form).length).toBe(1);
        expect(wrapper.find(FormInput).length).toBe(2);
        expect(wrapper.find(Button).length).toBe(1);
    });

    it('should render a form with an initial value of the user prop passed', () => {
        expect(wrapper.find('input[label="User"]').props().value).toBe(user);
    });

    it('should execute the setUser function when User input changes', () => {
        let userInput = wrapper.find('input[label="User"]');

        userInput.simulate('change', changeEvent);
        
        expect(setUser).toBeCalledTimes(1);
        expect(setUser).toBeCalledWith(changeEvent.target.value);
    });

    it('should empty the Value from Message Input and use the POST_MESSAGE mutation', async () => {
        let messageInput = wrapper.find('input[label="Message"]');
        messageInput.props().value = "Test";

        wrapper.find('form').simulate('submit', submitEvent);

        await act( async() => await new Promise(resolve => setTimeout(resolve, 0)));
        wrapper.update();
        
        expect(postMessage).toBeCalledTimes(1);
        expect(wrapper.find('input[label="Message"]').props().value).toBe('');
    })
});
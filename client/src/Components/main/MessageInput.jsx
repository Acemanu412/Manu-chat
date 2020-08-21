import React, { useState } from 'react';
import { Form, FormInput, Button } from 'shards-react';
import { useMutation } from '@apollo/client';

import { POST_MESSAGE } from '../../Mutations/messages';

const MessageInput = ({ user, setUser }) => {
    const [message, setMessage] = useState('');
    const [postmessage] = useMutation(POST_MESSAGE)

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!e.target[0].value) return null;
        setMessage('');
        postmessage({ variables: {user: user, content: message }})
    };

    return (
        <div className='input'>
            <Form inline={true} onSubmit={(e) => handleSubmit(e)}>

                    <FormInput 
                    className={'messageForm'}
                    placeholder="Write your message!"
                    label="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    />

                    <FormInput 
                    className={'userForm'}
                    placeholder="Name"
                    label="User"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    />

                <Button type='submit'>Send</Button>
            </Form>
        </div>
    )
};

export default MessageInput;
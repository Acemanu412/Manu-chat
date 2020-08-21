import React from 'react';
import { Alert } from 'shards-react';
import { GET_MESSAGES } from '../../Queries/messages';
import {  useQuery } from '@apollo/client';

const Messages = ({ user }) => {
    const { loading, error, data } = useQuery(GET_MESSAGES)
    if (loading) return <Alert theme='info'>Loading...</Alert>;
    if (error) return <Alert theme='danger'>Error!</Alert>;

    return (data.messages.map(({id, user: messageUser, content}) => (
      <div key={id} className={`message ${user === messageUser ? 'mine' : 'notMine'}`}> 
        {user !== messageUser && (<div className='userInitials'>{messageUser.slice(0,2).toUpperCase()}</div>)}
        <div className={`messageContent ${user === messageUser ? 'mine' : 'notMine'}`}>{content}</div>
      </div>
    )))
};

export default Messages;
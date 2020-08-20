import React from 'react';
import { GET_MESSAGES } from '../../Queries/messages';
import {  useQuery } from '@apollo/client';
import { Button } from 'shards-react';

const Messages = ({ user }) => {
    const { data } = useQuery(GET_MESSAGES)
    if(!data) return null;

    return (data.messages.map(({id, user: messageUser, content}) => (
      <div className={`message ${user === messageUser ? 'mine' : 'notMine'}`}> 
        {user !== messageUser && (<div className='userInitials'>{messageUser.slice(0,2).toUpperCase()}</div>)}
        <div className={`messageContent ${user === messageUser ? 'mine' : 'notMine'}`}>{content}</div>
      </div>
    )))
};

export default Messages;
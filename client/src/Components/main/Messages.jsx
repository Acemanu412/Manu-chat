import React, { useRef, useEffect } from 'react';
import { Alert } from 'shards-react';
import { GET_MESSAGES } from '../../Queries/messages';
import {  useSubscription } from '@apollo/client';

const Messages = ({ user }) => {
    const { loading, error, data } = useSubscription(GET_MESSAGES)
    const messagesEndRef = useRef(null)
    const scrollToBottom = () => {
      if(messagesEndRef.current) messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
    
    useEffect(scrollToBottom, [data]);
    if (loading) return <Alert theme='info'>Loading...</Alert>;
    if (error) return <Alert theme='danger'>Error!</Alert>;

    return (data.messages.map(({id, user: messageUser, content}) => (
      <div key={id} className={`message ${user === messageUser ? 'mine' : 'notMine'}`}> 
        {user !== messageUser && (<div className='userLetters'>{messageUser.slice(0,2).toUpperCase()}</div>)}
        <div className={`messageContent ${user === messageUser ? 'mine' : 'notMine'}`}>{content}</div>
        <div ref={messagesEndRef}/>
      </div>
    )))
};

export default Messages;
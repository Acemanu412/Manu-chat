import React from 'react';
import { GET_MESSAGES } from '../../Queries/messages';
import {  useQuery } from '@apollo/client';

const Messages = ({ user }) => {
    const { data } = useQuery(GET_MESSAGES)
    if(!data) return null;

    return <h2>{JSON.stringify(data)}</h2>
};

export default Messages;
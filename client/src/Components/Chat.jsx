import React, { useState } from "react";
import 'cross-fetch/polyfill';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import {Container} from 'shards-react';

import MessagesComponent from './main/Messages';
import MessageInput from './main/MessageInput';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
});

const Chat = () => {
  const [user, setUser] = useState('');

  return <ApolloProvider client={client}>
    <Container className='chatContainer'>
      <h1>CHAT</h1>
      <MessagesComponent user={user} />
      <MessageInput user={user} setUser={setUser} />
    </Container>
  </ApolloProvider>
}
export default Chat;

import React, { useState } from "react";
import 'cross-fetch/polyfill';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';
import {Container} from 'shards-react';

import MessagesComponent from './main/Messages';
import MessageInput from './main/MessageInput';

const serverPort = 4000;
const linkToServer = new WebSocketLink({
  uri: `ws://localhost:${serverPort}/`,
  options: {
    reconnect: true,
  }
});
const client = new ApolloClient({
  link: linkToServer,
  uri: `http://localhost:${serverPort}/`,
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

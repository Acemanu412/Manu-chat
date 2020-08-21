import React, { useState } from "react";
import 'cross-fetch/polyfill';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import {Container} from 'shards-react';

import MessagesComponent from './main/Messages';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
});

const Chat = () => {
  const [user, userSet] = useState('manu');

  return <ApolloProvider client={client}>
    <Container>
      <h1>CHAT</h1>
      <MessagesComponent user={user} />
      </Container>
  </ApolloProvider>
}
export default Chat;

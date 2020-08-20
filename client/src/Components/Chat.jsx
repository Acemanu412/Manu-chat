import React from "react";
import 'cross-fetch/polyfill';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import MessagesComponent from './main/Messages';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
});

const Chat = () => {
  return <ApolloProvider client={client}>
    <div>
      <h1>CHAT</h1>
      <MessagesComponent user={'Manu'} />
      </div>
  </ApolloProvider>
}
export default Chat;

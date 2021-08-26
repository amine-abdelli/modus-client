import React from 'react';
import ReactDOM from 'react-dom';
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloProvider,
  from,
} from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './_global.less';
import { cleanTypenameFieldLink } from './api/cleanTypenameFieldLink';
import { errorLink } from './api/errorLink';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql',
  credentials: 'include',
});

const client = new ApolloClient({
  // /!\ the order of links is important here, see : https://www.apollographql.com/docs/react/api/link/introduction/#handling-a-response
  // "HttpLink and BatchHttpLink are both examples of terminating links."
  link: from([cleanTypenameFieldLink, errorLink, httpLink]),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root'),
);

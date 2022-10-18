import { ApolloProvider } from 'react-apollo';
import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import App from './App';
import client from './lib/apollo';
import reportWebVitals from './reportWebVitals';

// eslint-disable-next-line no-undef
const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <div style={{ width: '100%', height: '100%' }}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </div>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

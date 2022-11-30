import React from 'react';
import ReactDOM from 'react-dom/client';
// import { App } from 'components/example-1/App';
// import { App } from 'components/example-2/App';
import { App } from 'components/example-3/App';
import { GlobalStyle } from 'components/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>
);

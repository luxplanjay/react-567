import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { GlobalStyle } from 'components/GlobalStyle';
import stickers from './stickers.json';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App initialStickers={stickers} />
    <GlobalStyle />
  </React.StrictMode>
);

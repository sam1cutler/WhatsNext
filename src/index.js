import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import './fonts/NickelodeonNF.ttf';
import './fonts/StarTrekEnterpriseFuture.ttf';
import './fonts/Adventure.ttf';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
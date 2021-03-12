import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import PublicWatchList from './PublicWatchList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <PublicWatchList />
    </BrowserRouter>, 
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

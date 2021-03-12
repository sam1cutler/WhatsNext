import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import FriendsPublicContainer from './FriendsPublicContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <FriendsPublicContainer />
    </BrowserRouter>, 
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

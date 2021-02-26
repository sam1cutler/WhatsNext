import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

it(`renders without crashing`, () => {
  
  // Creating a DOM element into which we'll render the component to be tested
  const div = document.createElement('div');
  
  // render the component
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>, div
  );
  
  // clean things up
  ReactDOM.unmountComponentAtNode(div);

});
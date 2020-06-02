import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders correct text', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);

  expect(div.innerHTML).toContain('Welcome to this unique project!');

  ReactDOM.unmountComponentAtNode(div);
});

import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);

    ReactDOM.unmountComponentAtNode(div);
});

it('renders the chirp box', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    expect(div.innerHTML).toContain('Chirp Box');

    ReactDOM.unmountComponentAtNode(div);
});

it('renders the chirp list', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    expect(div.innerHTML).toContain('Chirp List');

    ReactDOM.unmountComponentAtNode(div);
});
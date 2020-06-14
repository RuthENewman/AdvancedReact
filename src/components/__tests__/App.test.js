import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import ChirpBox from '../ChirpBox';
import ChirpList from '../ChirpList';

it('renders the chirp box', () => {
    const wrapped = shallow(<App />);
    expect(wrapped.find(ChirpBox).length).toEqual(1);
});

it('renders the chirp list', () => {
    const wrapped = shallow(<App />);
    expect(wrapped.find(ChirpList).length).toEqual(1);
});
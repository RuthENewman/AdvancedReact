import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';
import ChirpBox from 'components/ChirpBox';
import ChirpList from 'components/ChirpList';

let wrapped;

beforeEach(() => {
   wrapped = shallow(<App />);
});

it('renders the chirp box', () => {
    expect(wrapped.find(ChirpBox).length).toEqual(1);
});

it('renders the chirp list', () => {
    expect(wrapped.find(ChirpList).length).toEqual(1);
});
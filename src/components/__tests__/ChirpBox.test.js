import React from 'react';
import { mount } from 'enzyme';
import ChirpBox from 'components/ChirpBox';

let wrapped;

beforeEach(() => {
    wrapped = mount(<ChirpBox />);
});

it('renders a text area and a button', () => {
    expect(wrapped.find("textarea").length).toEqual(1);
    expect(wrapped.find("button").length).toEqual(1));
});
import React from 'react';
import { mount } from 'enzyme';
import ChirpBox from 'components/ChirpBox';

it('renders a text area and a button', () => {
    const wrapped = mount(<ChirpBox />);
    console.log(wrapped.find("textarea").length);
    console.log(wrapped.find("button").length)
});
import React from 'react';
import { mount } from 'enzyme';
import ChirpBox from 'components/ChirpBox';

let wrapped;

beforeEach(() => {
    wrapped = mount(<ChirpBox />);
});

afterEach(() => {   
    wrapped.unmount();
});

it('renders a text area and a button', () => {
    expect(wrapped.find("textarea").length).toEqual(1);
    expect(wrapped.find("button").length).toEqual(1);
});

it('user can enter text into the text area', () => {
    wrapped.find("textarea").simulate("change", { 
        target: { value: "chirp chirp" }   
    });
    wrapped.update();
    expect(wrapped.find("textarea").prop("value")).toEqual("chirp chirp");
});

it('user can submit the form and the text area is emptied', () => {
    wrapped.find("textarea").simulate("change", {
        target: { value: "new chirp" }
    });
    wrapped.update();
    wrapped.find("form").simulate("submit");
    wrapped.update();
    expect(wrapped.find("textarea").prop("value")).toEqual("");
});
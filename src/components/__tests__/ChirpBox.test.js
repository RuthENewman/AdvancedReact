import React from 'react';
import { mount } from 'enzyme';
import ChirpBox from 'components/ChirpBox';
import Root from 'Root';

let wrapped;

beforeEach(() => {
    wrapped = mount(
        <Root>
            <ChirpBox />
        </Root>
    );
});

afterEach(() => {   
    wrapped.unmount();
});

it('renders a text area and a button', () => {
    expect(wrapped.find("textarea").length).toEqual(1);
    expect(wrapped.find("button").length).toEqual(1);
});


describe('the text area', () => {
    beforeEach(() => {
        wrapped.find("textarea").simulate("change", { 
            target: { value: "chirp chirp" }   
        });
        wrapped.update();
    });

    it('user can enter text into the text area', () => {
        expect(wrapped.find("textarea").prop("value")).toEqual("chirp chirp");
    });
    
    it('user can submit the form and the text area is emptied', () => {
        wrapped.find("form").simulate("submit");
        wrapped.update();
        expect(wrapped.find("textarea").prop("value")).toEqual("");
    });
});


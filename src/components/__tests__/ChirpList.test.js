import React from 'react';
import { mount } from 'enzyme';
import ChirpList from 'components/ChirpList';
import Root from 'Root';

let wrapped;

beforeEach(() => {
    const initialState = {
        chirps: ["First chirp", "Second chirp"]
    };

    wrapped = mount(
        <Root initialState={initialState}>
            <ChirpList />
        </Root>
    );
});

it('renders one list item per chirp', () => {
    expect(wrapped.find('li').length).toEqual(2);
});

it('renders the text of each chirp', () => {
   expect(wrapped.render().text()).toContain("First chirp");
   expect(wrapped.render().text()).toContain("Second chirp");
});
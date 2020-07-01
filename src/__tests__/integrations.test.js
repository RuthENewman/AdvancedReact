import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';

beforeEach(() => {
    moxios.install();
    moxios.stubRequest('https://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [{ name: "Chirp #1" }, { name: "Chirp #2" }]
    });
});

afterEach(() => {
    moxios.uninstall();
});

it('fetches and renders a list of chirps', () => {
    // Render the whole app
    const wrapped = mount(
        <Root>
            <App />
        </Root>
    );

    wrapped.find('.update-feed').simulate('click');

    moxios.wait(() => {
        wrapped.update();

        expect(wrapped.find('li').length).toEqual(2);

        done();

        wrapped.unmount();
    });
});
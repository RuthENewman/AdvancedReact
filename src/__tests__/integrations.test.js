import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import App from 'components/App';

it('fetches and renders a list of chirps', () => {
    // Render the whole app
    const wrapped = mount(
        <Root>
            <App />
        </Root>
    );

    // Click update feed button

    // Expect to find a list of 500 list items
});
import React from 'react';
import { Route } from 'react-router-dom';
import ChirpBox from './ChirpBox';
import ChirpList from './ChirpList';

export default () => {
    return (
        <div>
            <Route path="/compose/chirp" component={ChirpBox} />
            <Route exact path="/" component={ChirpList} />
        </div>
    );
};
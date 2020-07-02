import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import ChirpBox from './ChirpBox';
import ChirpList from './ChirpList';

export default class App extends Component {
    renderButton() {

    }

    renderHeader() {
        return (
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/compose/chirp">Chirp something</Link>
                </li>
                <li>
                    {this.renderButton()}
                </li>
            </ul>
        )
    }

    render() {
        return (
            <div>
                <Route path="/compose/chirp" component={ChirpBox} />
                <Route exact path="/" component={ChirpList} />
            </div>
        );
    }
};
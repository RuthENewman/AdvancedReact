import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ChirpBox from './ChirpBox';
import ChirpList from './ChirpList';
import * as actions from 'actions';

class App extends Component {
    renderButton() {
        if (this.props.auth) {
            return (
                <button onClick={() => this.props.changeAuth(false)}>
                    Log out
                </button>
            );
        } else {
            return (
                <button onClick={() => this.props.changeAuth(true)}>
                    Log in
                </button>
            )
        }
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
                {this.renderHeader()}
                <Route path="/compose/chirp" component={ChirpBox} />
                <Route exact path="/" component={ChirpList} />
            </div>
        );
    }
};

function mapStateToProps(state) {
    return { auth: state.auth };
}


export default connect(mapStateToProps, actions)(App);
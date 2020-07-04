import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import requireAuth from 'components/requireAuth';

class ChirpBox extends Component {
    state = { chirp: '' };

    handleChange = event => {
        this.setState({ chirp: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.saveChirp(this.state.chirp);
        this.setState({ chirp: '' });
    };

    render() {
        return (
        <div>
            <form onSubmit={this.handleSubmit} >
                <h3>A penny for your thoughts...</h3>
                <textarea 
                    value={this.state.chirp}
                    onChange={this.handleChange} 
                />
                <div>
                    <button>Chirp away</button>
                </div>
            </form>
            <button className="update-feed" onClick={this.props.updateFeed}>
                Update Feed
            </button>
        </div>
        )
    }
}

export default connect(null, actions)(requireAuth(ChirpBox));
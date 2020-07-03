import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

class ChirpBox extends Component {
    state = { chirp: '' };

    componentDidMount() {
        this.shouldNavigateAway();
    }

    componentDidUpdate() {
        this.shouldNavigateAway();
    }

    shouldNavigateAway() {
        if (!this.props.auth) {
           this.props.history.push('/');
        }
    }

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

function mapStateToProps(state) {
    return { auth: state.auth };
};

export default connect(mapStateToProps, actions)(ChirpBox);
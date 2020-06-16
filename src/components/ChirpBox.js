import React, { Component } from 'react';

class ChirpBox extends Component {
    state = { 
        chirp: '' 
    };

    handleChange = event => {
        this.setState({ chirp: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        // TODOs
        // Call an action creator
        // Save the chirp

        this.setState({ chirp: '' });
    };

    render() {
        return (
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
        )
    }
}

export default ChirpBox;
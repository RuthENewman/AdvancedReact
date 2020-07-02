import React, { Component } from 'react';
import { connect } from 'react-redux';

class ChirpList extends Component {
    renderChirps() {
        return this.props.chirps.map(chirp => {
            return <li key={chirp}>{chirp}</li>
        });
    }


    render() {
        return (
            <div>
                <h4>Chirp List</h4>
                <ul>
                    {this.renderChirps()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { chirps: state.chirps };
}

export default connect(mapStateToProps)(ChirpList);
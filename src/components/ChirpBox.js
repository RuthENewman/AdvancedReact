import React, { Component } from 'react';

class ChirpBox extends Component {
    render() {
        return (
            <form>
                <h3>A penny for your thoughts...</h3>
                <textarea />
                <div>
                    <button>Chirp away</button>
                </div>
            </form>
        )
    }
}

export default ChirpBox;
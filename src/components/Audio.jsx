import React, { Component } from "react";

export default class Audio extends Component {
    render() {
        return (
            <audio
                className="audio"
                src={this.props.currentSong}
                onTimeUpdate={this.handleTimeUpdate}
            ></audio>
        );
    }
}

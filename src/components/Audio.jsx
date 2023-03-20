import React, { Component } from "react";

export default class Audio extends Component {
    constructor(props) {
        super(props);
        this.state = { currentTime: 0, duration: 0 };
        this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
    }

    handleTimeUpdate(e) {
        // document.querySelector(
        //     ".music-player__progress-indicator"
        // ).style.width = `${(e.target.currentTime / e.target.duration) * 100}%`;
        this.setState(() => ({
            currentTime: e.target.currentTime,
            duration: e.target.duration,
        }));

        this.props.handleTimeUpdate(
            this.state.currentTime,
            this.state.duration
        );
    }

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

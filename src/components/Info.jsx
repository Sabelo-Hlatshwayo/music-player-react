import React, { Component } from "react";

export default class Info extends Component {
    render() {
        console.log(this.props.currentTime, this.props.duration);
        return (
            <div
                className={
                    this.props.isPlaying
                        ? "music-player__info music-player__info--playing"
                        : "music-player__info"
                }
                // className="music-player__info music-player__info--playing"
            >
                <div className="music-player__info-container">
                    <p className="music-player__title">
                        Adele - Turning Tables
                    </p>
                    <div className="music-player__progress">
                        <div className="music-player__progress-indicator"></div>
                    </div>
                </div>
            </div>
        );
    }
}

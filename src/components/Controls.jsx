import React, { Component } from "react";
import { ReactComponent as PreviousIcon } from "./icons/PreviousIcon.svg";
import { ReactComponent as ForwardIcon } from "./icons/ForwardIcon.svg";
import { ReactComponent as PlayIcon } from "./icons/PlayIcon.svg";
import { ReactComponent as PauseIcon } from "./icons/PauseIcon.svg";

export default class Controls extends Component {
    render() {
        return (
            <div className="music-player__controls">
                <button
                    className="music-player__btn"
                    onClick={this.props.handlePreviousSong}
                >
                    <PreviousIcon className="music-player__icon" />
                </button>
                <button
                    className="music-player__btn"
                    onClick={this.props.handlePlay}
                >
                    {this.props.isPlaying ? (
                        <PauseIcon className="music-player__icon" />
                    ) : (
                        <PlayIcon className="music-player__icon" />
                    )}
                </button>
                <button
                    className="music-player__btn"
                    onClick={this.props.handleNextSong}
                >
                    <ForwardIcon className="music-player__icon" />
                </button>
            </div>
        );
    }
}

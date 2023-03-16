import React, { Component } from "react";
import { ReactComponent as PreviousIcon } from "./PreviousIcon.svg";
import { ReactComponent as ForwardIcon } from "./ForwardIcon.svg";
import { ReactComponent as PlayIcon } from "./PlayIcon.svg";
import { ReactComponent as PauseIcon } from "./PauseIcon.svg";

export default class Player extends Component {
    render() {
        return (
            <div className="music-player">
                <audio src=""></audio>
                <div className="music-player__controls">
                    <button className="music-player__btn">
                        <PreviousIcon className="music-player__icon" />
                    </button>
                    <button className="music-player__btn">
                        <PlayIcon className="music-player__icon" />
                    </button>
                    <button className="music-player__btn">
                        <ForwardIcon className="music-player__icon" />
                    </button>
                </div>
            </div>
        );
    }
}

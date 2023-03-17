import React, { Component } from "react";
import { ReactComponent as PreviousIcon } from "./icons/PreviousIcon.svg";
import { ReactComponent as ForwardIcon } from "./icons/ForwardIcon.svg";
import { ReactComponent as PlayIcon } from "./icons/PlayIcon.svg";
import { ReactComponent as PauseIcon } from "./icons/PauseIcon.svg";

export default class Player extends Component {
    constructor(props) {
        super(props);
        this.state = { isPlaying: false, songs: [] };
        this.handlePlay = this.handlePlay.bind(this);
    }

    handlePlay() {
        this.setState((prevState) => ({ isPlaying: !prevState.isPlaying }));
    }

    componentDidMount() {
        fetch("src/data.json")
            .then((response) => response.json())
            .then((data) => {
                this.setState((prevState) => {
                    return { songs: data };
                });
            });
    }

    render() {
        console.log(this.state.songs);
        return (
            <div className="music-player">
                <div
                    className={
                        this.state.isPlaying === true
                            ? "music-player__info music-player__info--playing"
                            : "music-player__info"
                    }
                ></div>
                <audio src=""></audio>
                <div className="music-player__cover">
                    <img
                        className={
                            this.state.isPlaying
                                ? "music-player__image music-player__image--playing"
                                : "music-player__image"
                        }
                        src="public/images/50 Cent.jpg"
                        alt=""
                    />
                </div>
                <div className="music-player__controls">
                    <button className="music-player__btn">
                        <PreviousIcon className="music-player__icon" />
                    </button>
                    <button
                        className="music-player__btn"
                        onClick={this.handlePlay}
                    >
                        {this.state.isPlaying === true ? (
                            <PauseIcon className="music-player__icon" />
                        ) : (
                            <PlayIcon className="music-player__icon" />
                        )}
                    </button>
                    <button className="music-player__btn">
                        <ForwardIcon className="music-player__icon" />
                    </button>
                </div>
            </div>
        );
    }
}

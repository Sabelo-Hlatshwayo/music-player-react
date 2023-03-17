import React, { Component } from "react";
import { ReactComponent as PreviousIcon } from "./icons/PreviousIcon.svg";
import { ReactComponent as ForwardIcon } from "./icons/ForwardIcon.svg";
import { ReactComponent as PlayIcon } from "./icons/PlayIcon.svg";
import { ReactComponent as PauseIcon } from "./icons/PauseIcon.svg";
import { randomNumberGenerator } from "../utils";

export default class Player extends Component {
    constructor(props) {
        super(props);
        this.state = { isPlaying: false, songs: [], currentSong: {} };
        this.handlePlay = this.handlePlay.bind(this);
        this.handleNextSong = this.handleNextSong.bind(this);
        this.handlePreviousSong = this.handlePreviousSong.bind(this);
        this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
    }

    handlePlay() {
        this.setState((prevState) => ({ isPlaying: !prevState.isPlaying }));

        this.state.isPlaying === true
            ? document.querySelector(".audio").pause()
            : document.querySelector(".audio").play();
    }

    handleNextSong() {
        const lastIndexInPlayList = this.state.songs.length - 1;
        let currentSongIndex = this.state.songs.indexOf(this.state.currentSong);

        if (currentSongIndex === lastIndexInPlayList) {
            this.setState((prevState) => {
                currentSongIndex = 0;
                return { currentSong: prevState.songs[currentSongIndex] };
            });
        } else {
            this.setState((prevState) => {
                currentSongIndex++;
                return { currentSong: prevState.songs[currentSongIndex] };
            });
        }

        setTimeout(() => {
            document.querySelector(".audio").play();
        }, 500);
    }

    handlePreviousSong() {
        const firstIndexInPlayList = 0;
        const lastIndexInPlayList = this.state.songs.length - 1;
        let currentSongIndex = this.state.songs.indexOf(this.state.currentSong);

        if (currentSongIndex === firstIndexInPlayList) {
            this.setState((prevState) => {
                currentSongIndex = lastIndexInPlayList;
                return { currentSong: prevState.songs[currentSongIndex] };
            });
        } else {
            this.setState((prevState) => {
                currentSongIndex--;
                return { currentSong: prevState.songs[currentSongIndex] };
            });
        }

        setTimeout(() => {
            document.querySelector(".audio").play();
        }, 500);
    }

    handleTimeUpdate(e) {
        // console.log("Time update triggered!!!");
        // console.dir(e.target.currentTime);
    }

    componentDidMount() {
        fetch("src/data.json")
            .then((response) => response.json())
            .then((data) => {
                this.setState((prevState) => {
                    return {
                        songs: data,
                        currentSong:
                            data[randomNumberGenerator(0, data.length - 1)],
                    };
                });
            });
    }

    render() {
        return (
            <div className="music-player">
                <div
                    className={
                        this.state.isPlaying === true
                            ? "music-player__info music-player__info--playing"
                            : "music-player__info"
                    }
                ></div>
                <audio
                    className="audio"
                    src={this.state.currentSong.url}
                    onTimeUpdate={this.handleTimeUpdate}
                ></audio>
                <div className="music-player__cover">
                    <img
                        className={
                            this.state.isPlaying
                                ? "music-player__image music-player__image--playing"
                                : "music-player__image"
                        }
                        src={this.state.currentSong.coverImage}
                        alt={`Album cover for ${this.state.currentSong.artist}'s ${this.state.currentSong.album} album`}
                    />
                </div>
                <div className="music-player__controls">
                    <button
                        className="music-player__btn"
                        onClick={this.handlePreviousSong}
                    >
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
                    <button
                        className="music-player__btn"
                        onClick={this.handleNextSong}
                    >
                        <ForwardIcon className="music-player__icon" />
                    </button>
                </div>
            </div>
        );
    }
}

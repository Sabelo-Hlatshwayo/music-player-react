import React, { Component } from "react";
import Info from "./Info";
import Audio from "./Audio";
import Cover from "./Cover";
import Controls from "./Controls";
import { randomNumberGenerator } from "../utils";

export default class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPlaying: false,
            songs: [],
            currentSong: {},
            currentTime: 0,
            duration: 0,
        };
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

    handleTimeUpdate(currentTime, duration) {
        this.setState(() => ({ currentTime, duration }));
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
        // console.log(this.state.currentTime);
        return (
            <div className="music-player">
                <Info
                    isPlaying={this.state.isPlaying}
                    currentTime={this.state.currentTime}
                    duration={this.state.duration}
                />
                <Audio
                    currentSong={this.state.currentSong.url}
                    handleTimeUpdate={this.handleTimeUpdate}
                />
                <Cover
                    isPlaying={this.state.isPlaying}
                    currentSong={this.state.currentSong}
                />
                <Controls
                    isPlaying={this.state.isPlaying}
                    handlePlay={this.handlePlay}
                    handleNextSong={this.handleNextSong}
                    handlePreviousSong={this.handlePreviousSong}
                />
            </div>
        );
    }
}

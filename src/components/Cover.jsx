import React, { Component } from "react";

export default class Cover extends Component {
    render() {
        return (
            <div className="music-player__cover">
                <img
                    className={
                        this.props.isPlaying
                            ? "music-player__image music-player__image--playing"
                            : "music-player__image"
                    }
                    src={this.props.currentSong.coverImage}
                    alt={`Album cover for ${this.props.currentSong.artist}'s ${this.props.currentSongalbum} album`}
                />
            </div>
        );
    }
}

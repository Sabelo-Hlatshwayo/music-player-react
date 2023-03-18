import React, { Component } from "react";

export default class Info extends Component {
    render() {
        return (
            <div
                className={
                    this.props.isPlaying
                        ? "music-player__info music-player__info--playing"
                        : "music-player__info"
                }
            ></div>
        );
    }
}

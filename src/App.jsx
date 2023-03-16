import React, { Component } from "react";
import Title from "./components/Title";
import Player from "./components/Player";

export default class App extends Component {
    render() {
        return (
            <div>
                <Title />
                <Player />
            </div>
        );
    }
}

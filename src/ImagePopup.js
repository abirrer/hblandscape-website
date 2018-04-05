import React, { Component } from "react";
import Gallery from "./Gallery.js";

export default class ImagePopup extends Component {
    constructor(props) {
        super(props);

        this.state = {};

        console.log("image source: ", this.props.imageSrc);
    }

    render() {
        return (
            <div id="image-popup__outer-box">
                <div id="image-popup__inner-box">
                    <div id="close-button">
                        <h3 onClick={this.props.togglePopup}>x</h3>
                    </div>
                    <img src={this.props.imageSrc} />
                </div>
            </div>
        );
    }
}

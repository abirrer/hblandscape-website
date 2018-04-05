import React, { Component } from "react";
import ImagePopup from "./ImagePopup.js";

export default class Gallery extends Component {
    constructor() {
        super();

        this.state = {
            showPopup: false,
            imageSrc: ""
        };

        this.togglePopup = this.togglePopup.bind(this);
    }

    togglePopup(e) {
        console.log(e.target.src);

        this.setState({
            showPopup: !this.state.showPopup,
            imageSrc: e.target.src
        });
    }

    render() {
        return (
            <div id="gallery__outer-div">
                <h1>Garden Gallery</h1>
                <div id="gallery__inner-div">
                    <div className="image-outer-box">
                        <img
                            className="image"
                            src="./images/gardengallery/1.jpg"
                            onClick={this.togglePopup}
                        />
                    </div>
                    <div className="image-outer-box">
                        <img
                            className="image"
                            src="./images/gardengallery/2.jpg"
                            onClick={this.togglePopup}
                        />
                    </div>
                    <div className="image-outer-box">
                        <img
                            className="image"
                            src="./images/gardengallery/3.jpg"
                            onClick={this.togglePopup}
                        />
                    </div>
                    <div className="image-outer-box">
                        <img
                            className="image"
                            src="./images/gardengallery/4.jpg"
                            onClick={this.togglePopup}
                        />
                    </div>
                    <div className="image-outer-box">
                        <img
                            className="image"
                            src="./images/gardengallery/5.jpg"
                            onClick={this.togglePopup}
                        />
                    </div>
                    <div className="image-outer-box">
                        <img
                            className="image"
                            src="./images/gardengallery/6.jpg"
                            onClick={this.togglePopup}
                        />
                    </div>
                    <div className="image-outer-box">
                        <img
                            className="image"
                            src="./images/gardengallery/7.jpg"
                            onClick={this.togglePopup}
                        />
                    </div>
                    <div className="image-outer-box">
                        <img
                            className="image"
                            src="./images/gardengallery/8.jpg"
                            onClick={this.togglePopup}
                        />
                    </div>
                    <div className="image-outer-box">
                        <img
                            className="image"
                            src="./images/gardengallery/9.jpg"
                            onClick={this.togglePopup}
                        />
                    </div>
                    <div className="image-outer-box">
                        <img
                            className="image"
                            src="./images/gardengallery/10.jpg"
                            onClick={this.togglePopup}
                        />
                    </div>
                    <div className="image-outer-box">
                        <img
                            className="image"
                            src="./images/gardengallery/11.jpg"
                            onClick={this.togglePopup}
                        />
                    </div>
                    <div className="image-outer-box">
                        <img
                            className="image"
                            src="./images/gardengallery/12.jpg"
                            onClick={this.togglePopup}
                        />
                    </div>
                    <div className="image-outer-box">
                        <img
                            className="image"
                            src="./images/gardengallery/13.jpg"
                            onClick={this.togglePopup}
                        />
                    </div>
                    <div className="image-outer-box">
                        <img
                            className="image"
                            src="./images/gardengallery/14.jpg"
                            onClick={this.togglePopup}
                        />
                    </div>
                    <div className="image-outer-box">
                        <img
                            className="image"
                            src="./images/gardengallery/15.jpg"
                            onClick={this.togglePopup}
                        />
                    </div>
                    <div className="image-outer-box">
                        <img
                            className="image"
                            src="./images/gardengallery/16.jpg"
                            onClick={this.togglePopup}
                        />
                    </div>
                    {this.state.showPopup && (
                        <ImagePopup
                            imageSrc={this.state.imageSrc}
                            togglePopup={this.togglePopup}
                        />
                    )}
                </div>
            </div>
        );
    }
}

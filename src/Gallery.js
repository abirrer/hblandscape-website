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
                            src="./images/residentialgardens/1.jpg"
                            onClick={this.togglePopup}
                        />
                    </div>
                    <div className="image-outer-box">
                        <img
                            className="image"
                            src="./images/residentialgardens/2.jpg"
                            onClick={this.togglePopup}
                        />
                    </div>
                    <div className="image-outer-box">
                        <img
                            className="image"
                            src="./images/residentialgardens/3.jpg"
                            onClick={this.togglePopup}
                        />
                    </div>
                    <div className="image-outer-box">
                        <img
                            className="image"
                            src="./images/residentialgardens/4.jpg"
                            onClick={this.togglePopup}
                        />
                    </div>
                    <div className="image-outer-box">
                        <img
                            className="image"
                            src="./images/residentialgardens/5.jpg"
                            onClick={this.togglePopup}
                        />
                    </div>
                    <div className="image-outer-box">
                        <img
                            className="image"
                            src="./images/residentialgardens/6.jpg"
                            onClick={this.togglePopup}
                        />
                    </div>
                    <div className="image-outer-box">
                        <img
                            className="image"
                            src="./images/residentialgardens/7.jpg"
                            onClick={this.togglePopup}
                        />
                    </div>
                    <div className="image-outer-box">
                        <img
                            className="image"
                            src="./images/residentialgardens/8.jpg"
                            onClick={this.togglePopup}
                        />
                    </div>
                    <div className="image-outer-box">
                        <img
                            className="image"
                            src="./images/residentialgardens/9.jpg"
                            onClick={this.togglePopup}
                        />
                    </div>
                    <div className="image-outer-box">
                        <img
                            className="image"
                            src="./images/residentialgardens/10.jpg"
                            onClick={this.togglePopup}
                        />
                    </div>
                    <div className="image-outer-box">
                        <img
                            className="image"
                            src="./images/residentialgardens/11.jpg"
                            onClick={this.togglePopup}
                        />
                    </div>
                    <div className="image-outer-box">
                        <img
                            className="image"
                            src="./images/residentialgardens/12.jpg"
                            onClick={this.togglePopup}
                        />
                    </div>
                    <div className="image-outer-box">
                        <img
                            className="image"
                            src="./images/commercialgardens/13.jpg"
                            onClick={this.togglePopup}
                        />
                    </div>
                    <div className="image-outer-box">
                        <img
                            className="image"
                            src="./images/commercialgardens/14.jpg"
                            onClick={this.togglePopup}
                        />
                    </div>
                    <div className="image-outer-box">
                        <img
                            className="image"
                            src="./images/commercialgardens/15.jpg"
                            onClick={this.togglePopup}
                        />
                    </div>
                    <div className="image-outer-box">
                        <img
                            className="image"
                            src="./images/commercialgardens/16.jpg"
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

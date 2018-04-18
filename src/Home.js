import React, { Component } from "react";

export default class Home extends Component {
    constructor() {
        super();

        this.state = {
            backgroundImage: "/images/gardengallery/16.jpg"
        };
    }

    componentDidMount() {
        const urls = [
            "/images/gardengallery/1.jpg",
            "/images/gardengallery/6.jpg",
            "/images/gardengallery/13.jpg",
            "/images/gardengallery/16.jpg"
        ];

        let i = 0;

        const changeBackground = url => {
            let timer = setTimeout(() => {
                this.setState({
                    backgroundImage: urls[i]
                });

                i++;

                if (i == urls.length) {
                    i = 0;
                }

                changeBackground();
            }, 3000);
        };
        changeBackground();
    }

    // componentWillUnmount() {
    //     clearTimeout(timer);
    // }

    render() {
        return (
            <div>
                <div id="home-div">
                    <img
                        id="home__background"
                        src={this.state.backgroundImage}
                    />
                </div>
                <div id="logo-div">
                    <img id="home__logo" src="./images/logo/logowhite.png" />
                </div>
            </div>
        );
    }
}

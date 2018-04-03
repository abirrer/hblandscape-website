import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            showServices: false
        };

        this.toggleServices = this.toggleServices.bind(this);
    }

    toggleServices() {
        this.setState({ showServices: !this.state.showServices });
    }

    render() {
        return (
            <BrowserRouter>
                <header>
                    <Link to="/">
                        <img id="logo" src="/images/logo.png" alt="logo" />
                    </Link>

                    <nav>
                        <Link to="/">Home</Link>
                        <Link to="/about-us">About Us</Link>
                        <Link
                            to="/services"
                            onMouseOver={this.toggleServices}
                            onMouseOut={this.toggleServices}
                        >
                            Services
                        </Link>
                        {this.state.showServices && (
                            <div id="services-menu">
                                <Link
                                    to="/services/residential"
                                    onClick={this.toggleServices}
                                >
                                    Residential
                                </Link>
                                <Link
                                    to="/services/commercial"
                                    onClick={this.toggleServices}
                                >
                                    Commercial
                                </Link>
                            </div>
                        )}
                        <Link to="/gallery">Gallery</Link>
                        <Link to="/testimonials">Testimonials</Link>
                        <Link to="/contact">Contact Us</Link>
                        <Link to="/my-account">My Account</Link>
                    </nav>
                </header>
            </BrowserRouter>
        );
    }
}

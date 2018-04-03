import React, { Component } from "react";
import axios from "./axios";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./Home.js";
import About from "./About.js";
import Services from "./Services.js";
import ServicesResidential from "./ServicesResidential.js";
import ServicesCommercial from "./ServicesCommercial.js";
import Gallery from "./Gallery.js";
import Testimonials from "./Testimonials.js";
import Contact from "./Contact.js";
import Account from "./Account.js";

export default class App extends Component {
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
                <div>
                    <header>
                        <Link to="/">
                            <img id="logo" src="/images/logo.png" alt="logo" />
                        </Link>

                        <nav>
                            <Link
                                to="/"
                                style={{ textDecorationStyle: "none" }}
                            >
                                Home
                            </Link>
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
                    <div className="body">
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about-us" component={About} />
                        <Route exact path="/services" component={Services} />
                        <Route
                            exact
                            path="/services/residential"
                            component={ServicesResidential}
                        />
                        <Route
                            exact
                            path="/services/commercial"
                            component={ServicesCommercial}
                        />
                        <Route exact path="/gallery" component={Gallery} />
                        <Route
                            exact
                            path="/testimonials"
                            component={Testimonials}
                        />
                        <Route exact path="/contact" component={Contact} />
                        <Route exact path="/my-account" component={Account} />
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

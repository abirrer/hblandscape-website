import React, { Component } from "react";
import axios from "./axios";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./Home.js";
import About from "./About.js";
import Services from "./Services.js";
import Gallery from "./Gallery.js";
import Testimonials from "./Testimonials.js";
import Contact from "./Contact.js";
import Account from "./Account.js";

export default class App extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <header>
                        <Link to="/">
                            <img
                                id="logo"
                                src="/images/logo/logov2.png"
                                alt="logo"
                            />
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
                        <Route exact path="/gallery" component={Gallery} />
                        <Route
                            exact
                            path="/testimonials"
                            component={Testimonials}
                        />
                        <Route exact path="/contact" component={Contact} />
                        <Route exact path="/my-account" component={Account} />
                    </div>
                    <footer>
                        Huntington Beach Landscape © 2018 | LIC# C27-526009
                    </footer>
                </div>
            </BrowserRouter>
        );
    }
}

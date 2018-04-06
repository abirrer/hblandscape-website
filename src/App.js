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
                                src="/images/logo/logogreensmall.png"
                                alt="logo"
                            />
                        </Link>

                        <nav>
                            <Link
                                to="/"
                                style={{
                                    textDecoration: "none",
                                    color: "black"
                                }}
                                className="link"
                            >
                                Home
                            </Link>
                            <Link
                                to="/about-us"
                                style={{
                                    textDecoration: "none",
                                    color: "black"
                                }}
                                className="link"
                            >
                                About Us
                            </Link>
                            <Link
                                to="/services"
                                style={{
                                    textDecoration: "none",
                                    color: "black"
                                }}
                                className="link"
                            >
                                Services
                            </Link>
                            <Link
                                to="/gallery"
                                style={{
                                    textDecoration: "none",
                                    color: "black"
                                }}
                                className="link"
                            >
                                Gallery
                            </Link>
                            <Link
                                to="/testimonials"
                                style={{
                                    textDecoration: "none",
                                    color: "black"
                                }}
                                className="link"
                            >
                                Testimonials
                            </Link>
                            <Link
                                to="/contact"
                                style={{
                                    textDecoration: "none",
                                    color: "black"
                                }}
                                className="link"
                            >
                                Contact Us
                            </Link>
                            <Link
                                to="/my-account"
                                style={{
                                    textDecoration: "none",
                                    color: "black"
                                }}
                                className="link"
                            >
                                My Account
                            </Link>
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
                        <Route path="/my-account" component={Account} />
                    </div>
                    <footer>
                        Huntington Beach Landscape © 2018 | LIC# C27-526009
                    </footer>
                </div>
            </BrowserRouter>
        );
    }
}

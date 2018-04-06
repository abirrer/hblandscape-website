import React, { Component } from "react";
import { Link } from "react-router-dom";

export default function About() {
    return (
        <div id="about">
            <h1>About Huntington Beach Landscape</h1>
            <div id="about__info-box">
                <p>
                    <h3>Long Story Short</h3>
                    Huntington Beach Landscape Company has been locally owned
                    and operated since 1981. The owner, Urs Birrer, come from a
                    lineage of landscapers with his father and brothers all
                    operating and owning their own landscape firms across
                    Switzerland and California. Urs was trained in Switzerland
                    and later settled in Southern California with his family.
                    With over 30 years of experience, Urs specializes in
                    designing custom landscapes with quality plants and
                    materials for all kinds of residential and commercial
                    projects.
                    <br />
                    <br />
                    When he's not building people's dream gardens, Urs is off
                    sailing along the Californian coast, learning to fly planes,
                    or repairing all kinds of machines, engines, and computers.
                </p>
                <img src="./images/about/about2.jpg" />
            </div>

            <div id="contact__outer-box">
                <div>
                    <iframe
                        width="450"
                        height="300"
                        frameBorder="0"
                        style={{ border: "0" }}
                        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyALk1IaXTkZAIB4FGqJ7khg9JCTJdZK8gg
                    &q=Orange+County,+CA,+USA"
                    />
                </div>
                <div id="contact__info-box">
                    <div>
                        <h3>Service Area</h3>
                        <p>
                            Huntington Beach Landscape mainly services the
                            Orange County and Los Angeles County regions of
                            Southern California.
                        </p>
                    </div>
                    <div>
                        <div>
                            <h3>Contact Info</h3>
                            <p>
                                Phone:{" "}
                                <a href="tel:+17148466000">(714) 846-6000</a>
                                <br />
                                Email:{" "}
                                <a href="mailto:hblandscapeco@gmail.com">
                                    hblandscapeco@gmail.com{" "}
                                </a>
                                <br />
                                Location: Huntington Beach, CA 92649
                            </p>
                        </div>

                        <Link
                            to="/contact"
                            style={{
                                textDecoration: "none",
                                color: "white"
                            }}
                        >
                            <button>Get In Touch</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

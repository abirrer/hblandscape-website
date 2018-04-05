import React, { Component } from "react";

export default function Testimonials() {
    return (
        <div id="testimonials">
            <h1>Customer Projects and Testimonials.</h1>
            <div id="testimonials__outer-box">
                <img src="./images/testimonials/1.jpg" className="box-border" />

                <div id="testimonials__inner-box" className="box-border">
                    <div>
                        <h2>Residential Backyard Overhaul</h2>
                    </div>
                    <div>
                        <h3>Challenges</h3>
                        <ul>
                            <li>Making new backyard low-maintenance.</li>
                            <li>Naturally dry soil of the backyard.</li>
                            <li>
                                Include a patio deck that wasn't there before.
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>Work Completed</h3>
                        <ul>
                            <li>
                                Removed old plants and lawn. Refertilized soil
                                to improve soil quality for new plants.
                            </li>
                            <li>
                                Designed, planned, and installed concrete patio
                                deck.
                            </li>
                            <li>
                                Planted select mediterranean bushes known for
                                ability to survive in drier soils.
                            </li>
                            <li>
                                Installed potted trees on deck for minimal
                                maintenance.
                            </li>
                            <li>Completely new sod installed.</li>
                        </ul>
                    </div>
                </div>
                <div id="quote" className="box-border">
                    <h3>
                        "The idea of working with contractors stressed me out
                        until working with Huntington Beach Landscape. Your
                        company was professional every step of the way. From
                        design to final walkthrough our project coordinator kept
                        us informed. We love our new backyard, thanks so much!"
                        <br />
                        <br />
                        - The Jones Family
                    </h3>
                </div>
            </div>

            <div id="testimonials__outer-box">
                <img src="./images/testimonials/3.jpg" className="box-border" />

                <div id="testimonials__inner-box" className="box-border">
                    <div>
                        <h2>Commercial Property Initial Development</h2>
                    </div>
                    <div>
                        <h3>Challenges</h3>
                        <ul>
                            <li>
                                Many large and mature palm trees to maintain.
                            </li>
                            <li>Need automated irrigation system.</li>
                            <li>Have to work around busy business hours.</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Work Completed</h3>
                        <ul>
                            <li>
                                Pruned all large palm trees and trimmed all
                                plants and grass.
                            </li>
                            <li>
                                Completed design and installation of automated
                                water irrigation system complex-wide.
                            </li>
                            <li>
                                Redesigned all planter boxes and added
                                additional flowers for lush appearance.
                            </li>
                            <li>Developed weekly maintenance program.</li>
                        </ul>
                    </div>
                </div>
                <div id="quote" className="box-border">
                    <h3>
                        "Huntington Beach Landscape is an excellent company to
                        work with, especially for large commercial property
                        needs. They communicate proactivey and do everything
                        they say they are going to do. From start to finish, we
                        were on a team with Huntington Beach Landscape - we
                        discussed plans/questions as a team, and we made
                        decisions as a team. I would highly recommend Huntington
                        Beach Landscape!"
                        <br />
                        <br />
                        - Bella Terra Property Management
                    </h3>
                </div>
            </div>
        </div>
    );
}

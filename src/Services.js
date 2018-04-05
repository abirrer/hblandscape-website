import React, { Component } from "react";

export default function Services() {
    return (
        <div id="services">
            <h1>We provide all these services and more!</h1>
            <div id="services-flex-box">
                <div className="services__outer-box">
                    <img src="./images/icons/gardening.png" />
                    <div className="services__inner-box">
                        <h3>Gardening</h3>
                        <p>
                            Garden edging, weed control, cleanup and pruning are
                            just a few of our professional gardening services.
                        </p>
                    </div>
                </div>
                <div className="services__outer-box">
                    <img src="./images/icons/gardenart.png" />
                    <div className="services__inner-box">
                        <h3>Landscape Design</h3>
                        <p>
                            Traditional gardens, lawn alternatives and
                            low-maintenance natural gardens and landscapes.
                        </p>
                    </div>
                </div>
                <div className="services__outer-box">
                    <img src="./images/icons/lawn.png" />
                    <div className="services__inner-box">
                        <h3>Lawn Care & Lawn Alternatives</h3>
                        <p>
                            Full lawn care services from lawn maintenance to
                            fertilization, aeration, over-seeding, restoration
                            and installation. We also offer no-chemical, natural
                            alternatives to a lawn like mulch.
                        </p>
                    </div>
                </div>
                <div className="services__outer-box">
                    <img src="./images/icons/irrigation.png" />
                    <div className="services__inner-box">
                        <h3>Irrigation Systems & Water Features</h3>
                        <p>
                            We are experienced in installing automated
                            irrigation systems as well as building decorative
                            water features.
                        </p>
                    </div>
                </div>
                <div className="services__outer-box">
                    <img src="./images/icons/landscapedesign.png" />
                    <div className="services__inner-box">
                        <h3>Garden Art</h3>
                        <p>
                            Handcrafted features add beautiful, distinctive and
                            durable value to your property.
                        </p>
                    </div>
                </div>
                <div className="services__outer-box">
                    <img src="./images/icons/patios.png" />
                    <div className="services__inner-box">
                        <h3>Patios & Outdoor Spaces</h3>
                        <p>
                            We design and install an array of functional paver,
                            cobble stone and flag stone patio options. We also
                            design and build outdoor spaces, walkways, seating
                            areas, and raised garden beds.
                        </p>
                    </div>
                </div>
                <div className="services__outer-box">
                    <img src="./images/icons/maintenance.png" />
                    <div className="services__inner-box">
                        <h3>Maintenance Programs</h3>
                        <p>
                            We work with you to design a regular maintenance
                            program to ensure your garden stays healthy all year
                            around. We will also teach you how to take care of
                            your garden.
                        </p>
                    </div>
                </div>
                <div className="services__outer-box">
                    <img src="./images/icons/planthealthcare.png" />
                    <div className="services__inner-box">
                        <h3>Plant Health Care</h3>
                        <p>
                            We establish and maintain soil nutrients, irrigation
                            cycles, and prevent pest, disease and safety issues.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

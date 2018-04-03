import React, { Component } from "react";
import axios from "./axios";

export default class Contact extends Component {
    constructor() {
        super();
    }

    sendEmail(e) {
        e.preventDefault();

        let data = {};
    }

    render() {
        return (
            <div>
                <h2>Tell us about your landscape project and get a quote!</h2>
                <p>
                    Please include all relevant information and one of our staff
                    members will contact you as soon as possible and discuss
                    your vision and provide you landscape quotes. Thanks for
                    reaching out to HB Landscape Company for your landscape
                    needs!
                </p>
                <form method="POST">
                    <label htmlFor="first">First Name</label>
                    <input type="text" name="first" required />

                    <label htmlFor="last">Last Name</label>
                    <input type="text" name="last" required />

                    <label htmlFor="tel">Phone Number</label>
                    <input type="tel" name="tel" required />

                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" />

                    <label htmlFor="preferredContact">
                        Preferred Method of Contact
                    </label>
                    <input type="radio" name="preferredContact" value="phone">
                        Telephone
                    </input>
                    <br />
                    <input type="radio" name="preferredContact" value="email">
                        Email
                    </input>
                    <br />
                    <input type="radio" name="preferedContact" value="either">
                        Both are fine
                    </input>

                    <label htmlFor="city">Site Location</label>
                    <input type="text" name="city" placeholder="City" />

                    <label htmlFor="projectType">Site Type</label>
                    <input
                        type="checkbox"
                        name="projectType"
                        value="Residential"
                    >
                        Residential
                    </input>
                    <br />
                    <input
                        type="checkbox"
                        name="projectType"
                        value="Commercial"
                    >
                        Commercial
                    </input>

                    <label htmlFor="projectRequirements">
                        Landscape Requirements
                    </label>
                    <input
                        type="checkbox"
                        name="projectRequirements"
                        value="House"
                    >
                        House Package
                    </input>
                    <br />
                    <input
                        type="checkbox"
                        name="projectRequirements"
                        value="Plants"
                    >
                        Plants
                    </input>
                    <br />
                    <input
                        type="checkbox"
                        name="projectRequirements"
                        value="Trees"
                    >
                        Mature Trees
                    </input>
                    <br />
                    <input
                        type="checkbox"
                        name="projectRequirements"
                        value="Lawn"
                    >
                        Lawn
                    </input>
                    <br />
                    <input
                        type="checkbox"
                        name="projectRequirements"
                        value="Mulch"
                    >
                        Mulch
                    </input>
                    <br />
                    <input
                        type="checkbox"
                        name="projectRequirements"
                        value="Garden Art"
                    >
                        Garden Art
                    </input>
                    <br />
                    <input
                        type="checkbox"
                        name="projectRequirements"
                        value="Pots"
                    >
                        Pots
                    </input>
                    <br />
                    <input
                        type="checkbox"
                        name="projectRequirements"
                        value="Irrigation"
                    >
                        Irrigation
                    </input>
                    <br />
                    <input
                        type="checkbox"
                        name="projectRequirements"
                        value="Water Features"
                    >
                        Water Feature(s)
                    </input>
                    <br />
                    <input
                        type="checkbox"
                        name="projectRequirements"
                        value="Paving"
                    >
                        Paving
                    </input>
                    <br />
                    <input
                        type="checkbox"
                        name="projectRequirements"
                        value="Decking"
                    >
                        Decking
                    </input>
                    <br />
                    <input
                        type="checkbox"
                        name="projectRequirements"
                        value="Maintenance"
                    >
                        Maintenance Program
                    </input>
                    <br />
                    <input
                        type="checkbox"
                        name="projectRequirements"
                        value="All"
                    >
                        All
                    </input>
                    <br />
                    <input
                        type="checkbox"
                        name="projectRequirements"
                        value="Unsure"
                    >
                        Unsure
                    </input>

                    <label htmlFor="message">Summary of Work Request</label>
                    <textarea name="message" rows="5" />

                    <input
                        type="submit"
                        value="Submit"
                        onClick={this.sendEmail}
                    />
                </form>
            </div>
        );
    }
}

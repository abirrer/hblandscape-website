import React, { Component } from "react";
import axios from "./axios";

export default class Contact extends Component {
    constructor() {
        super();
    }

    sendEmail(e) {
        e.preventDefault();

        const data = new FormData(e.target);

        const emailData = {
            first: data.get("first"),
            last: data.get("last"),
            tel: data.get("tel"),
            email: data.get("email"),
            preferredContact: data.get("preferredContact"),
            projectType: data.get("projectType"),
            city: data.get("city"),
            projectRequirements: data.get("projectRequirements"),
            message: data.get("message")
        };

        console.log("here is the form data: ", emailData);

        if (!e.target.checkValidity()) {
            console.log("not all required fields completed!");
            return;
        } else {
            axios.post("/contact", emailData).then(res => {
                if (res.data.success) {
                    console.log("success with email send in Contact component");
                } else {
                    console.log("error with email send in Contact component");
                }
            });
        }
    }

    render() {
        // this[formFieldName] = e.target.value;

        return (
            <div id="contactComponent">
                <h2>Tell us about your landscape project and get a quote!</h2>
                <p>
                    Please include all relevant inmation and one of our staff
                    members will contact you as soon as possible and discuss
                    your vision and provide you landscape quotes. <br />
                    <br />Thanks reaching out to HB Landscape Company your
                    landscape needs!
                </p>
                <form method="POST" onSubmit={this.sendEmail} noValidate>
                    <h3>Basic Details</h3>
                    <div>
                        <label htmlFor="first">First Name: </label>
                        <br />
                        <input
                            type="text"
                            name="first"
                            placeholder="First Name"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="last">Last Name: </label>
                        <br />
                        <input
                            type="text"
                            name="last"
                            placeholder="Last Name"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="tel">Phone Number: </label>
                        <br />
                        <input
                            type="tel"
                            name="tel"
                            placeholder="Phone Number"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email: </label>
                        <br />
                        <input type="email" name="email" placeholder="Email" />
                    </div>

                    <h3>Preferred Method of Contact</h3>
                    <div>
                        <input
                            type="radio"
                            id="phone"
                            name="preferredContact"
                            value="phone"
                        />
                        <label htmlFor="phone">Telephone</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            id="email"
                            name="preferredContact"
                            value="email"
                        />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            id="both"
                            name="preferredContact"
                            value="both"
                        />
                        <label htmlFor="both">Both are fine</label>
                    </div>

                    <h3>Details of Proposed Project Site</h3>
                    <div>
                        <input
                            type="radio"
                            id="residential"
                            name="projectType"
                            value="Residential"
                        />
                        <label htmlFor="residential">Residential</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            id="commercial"
                            name="projectType"
                            value="Commercial"
                        />
                        <label htmlFor="commercial">Commercial</label>
                    </div>
                    <br />
                    <div>
                        <label htmlFor="city">Site Location: </label>
                        <br />
                        <input
                            type="text"
                            name="city"
                            id="city"
                            placeholder="City"
                        />
                    </div>

                    <h3>Landscape Project Requirements</h3>
                    <div>
                        <input
                            type="checkbox"
                            id="housePackage"
                            name="projectRequirements"
                            value="housePackage"
                        />
                        <label htmlFor="housePackage">House Package</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="plants"
                            name="projectRequirements"
                            value="plants"
                        />
                        <label htmlFor="plants">Plants</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="trees"
                            name="projectRequirements"
                            value="trees"
                        />
                        <label htmlFor="trees">Mature Trees</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="lawn"
                            name="projectRequirements"
                            value="lawn"
                        />
                        <label htmlFor="lawn">Lawn</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="mulch"
                            name="projectRequirements"
                            value="mulch"
                        />
                        <label htmlFor="mulch">Mulch</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="gardenArt"
                            name="projectRequirements"
                            value="gardenArt"
                        />
                        <label htmlFor="gardenArt">Garden Art</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="pots"
                            name="projectRequirements"
                            value="pots"
                        />
                        <label htmlFor="pots">Pots</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="irrigation"
                            name="projectRequirements"
                            value="irrigation"
                        />
                        <label htmlFor="irrigation">Irrigation</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="waterFeatures"
                            name="projectRequirements"
                            value="waterFeatures"
                        />
                        <label htmlFor="waterFeatures">Water Feature(s)</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="paving"
                            name="projectRequirements"
                            value="paving"
                        />
                        <label htmlFor="paving">Paving</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="decking"
                            name="projectRequirements"
                            value="decking"
                        />
                        <label htmlFor="decking">Decking</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="maintenance"
                            name="projectRequirements"
                            value="maintenance"
                        />
                        <label htmlFor="maintenance">Maintenance Program</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="all"
                            name="projectRequirements"
                            value="all"
                        />
                        <label htmlFor="all">All</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="unsure"
                            name="projectRequirements"
                            value="unsure"
                        />
                        <label htmlFor="unsure">Unsure</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="other"
                            name="projectRequirements"
                            value="other"
                        />
                        <label htmlFor="other">Other</label>
                    </div>

                    <h3>Summary of Work Request</h3>
                    <div>
                        <textarea
                            name="message"
                            id="message"
                            rows="6"
                            placeholder="Add any additional information (e.g. size of area, requirement details, budget, etc.)"
                        />
                    </div>

                    <div>
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        );
    }
}

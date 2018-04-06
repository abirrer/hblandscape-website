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
                <h1>Submit details for a free quote!</h1>
                <form method="POST" onSubmit={this.sendEmail} noValidate>
                    <p>
                        Please include all relevant information and one of our
                        staff members will contact you as soon as possible to
                        discuss your vision and provide you a quote. <br />
                        <br />Thanks reaching out to HB Landscape Company your
                        landscape needs!
                    </p>
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
                            placeholder="(123) 456-7890"
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
                            id="either"
                            name="preferredContact"
                            value="either"
                        />
                        <label htmlFor="either">Either is fine</label>
                    </div>

                    <h3>Details of Proposed Project Site</h3>
                    <div>
                        <input
                            type="radio"
                            id="residential"
                            name="projectType"
                            value="Residential Property"
                        />
                        <label htmlFor="residential">Residential</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            id="commercial"
                            name="projectType"
                            value="Commercial Property"
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
                            id="gardening"
                            name="projectRequirements"
                            value="Gardening"
                        />
                        <label htmlFor="gardening">Gardening</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="landscapedesign"
                            name="projectRequirements"
                            value="Landscape Design"
                        />
                        <label htmlFor="landscapedesign">
                            Landscape Design
                        </label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="irrigation"
                            name="projectRequirements"
                            value="Irrigation Systems"
                        />
                        <label htmlFor="irrigation">Irrigation Systems</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="decorative"
                            name="projectRequirements"
                            value="Decorative Garden Features"
                        />
                        <label htmlFor="decorative">
                            Decorative Garden Features
                        </label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="lawn"
                            name="projectRequirements"
                            value="Lawn Care or Lawn Alternatives"
                        />
                        <label htmlFor="lawn">
                            Lawn Care or Lawn Alternatives
                        </label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="patio"
                            name="projectRequirements"
                            value="Patio & Outdoor Spaces"
                        />
                        <label htmlFor="patio">Patio & Outdoor Spaces</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="planthealthcare"
                            name="projectRequirements"
                            value="Plant Healthcare"
                        />
                        <label htmlFor="planthealthcare">
                            Plant Healthcare
                        </label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="maintenance"
                            name="projectRequirements"
                            value="Maintenance Program"
                        />
                        <label htmlFor="maintenance">Maintenance Program</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="all"
                            name="projectRequirements"
                            value="All"
                        />
                        <label htmlFor="all">All</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="unsure"
                            name="projectRequirements"
                            value="Unsure"
                        />
                        <label htmlFor="unsure">Unsure</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="other"
                            name="projectRequirements"
                            value="Other"
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

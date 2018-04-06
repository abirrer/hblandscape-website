import React, { Component } from "react";
import axios from "./axios";

export default class AccountDetails extends Component {
    constructor() {
        super();

        this.state = {
            email: "",
            first: "",
            last: ""
        };
    }

    render() {
        return (
            <div id="account-details">
                <div id="invoices">
                    <h3>Most Recent Invoices</h3>
                    <div id="line" />
                    <a href="/images/invoices/mar2018.png" target="_blank">
                        March 2018
                    </a>
                    <a href="/images/invoices/feb2018.png" target="_blank">
                        Feb 2018
                    </a>
                    <a href="/images/invoices/jan2018.png" target="_blank">
                        Jan 2018
                    </a>
                    <a href="/images/invoices/dec2017.png" target="_blank">
                        Dec 2017
                    </a>
                </div>
                <div id="payment-button">
                    <h3>Pay Your Bills Online</h3>
                    <div id="line" />
                    <img src="/images/payment/paypal.png" />
                </div>
            </div>
        );
    }
}

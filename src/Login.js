import React, { Component } from "react";
import axios from "./axios";
import { Link } from "react-router-dom";

// ------------------------------------------------------------ //

export default class Login extends Component {
    constructor() {
        super();

        this.state = {
            email: "",
            password: "",
            error: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        const { email, password } = this.state;

        e.preventDefault();

        axios.post("/my-account", { email, password }).then(res => {
            if (res.data.success) {
                console.log("success with login handleSubmit");
                location.replace("/");
            } else {
                console.log("error with login handleSubmit");
                this.setState({
                    error: res.data.error
                });
            }
        });
    }

    render() {
        return (
            <div className="welcome-outer-box">
                <p className="error-message">{this.state.error}</p>
                <form className="welcome-inner-box">
                    <input
                        onChange={this.handleChange}
                        name="email"
                        type="email"
                        placeholder="Email Address"
                    />
                    <input
                        onChange={this.handleChange}
                        name="password"
                        type="password"
                        placeholder="Password"
                    />
                    <button onClick={this.handleSubmit}>Login</button>
                </form>
                <p>
                    Not registered?{" "}
                    <Link to="/my-account/register">Register Now</Link>.
                </p>
            </div>
        );
    }
}

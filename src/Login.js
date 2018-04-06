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
                location.replace("/my-account/details");
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
            <div className="login__outer-box">
                <form className="login__inner-box">
                    <p>Log in to access your account details.</p>
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
                    {this.state.error && (
                        <p className="error-message">{this.state.error}</p>
                    )}
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

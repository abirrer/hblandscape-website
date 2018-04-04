import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Register from "./Register.js";
import Login from "./Login.js";
import AccountDetails from "./AccountDetails.js";

// ------------------------------------------------------------ //

export default function Account() {
    return (
        <div id="account">
            <BrowserRouter>
                <div>
                    <h1>You are in your account section.</h1>
                    <Route exact path="/my-account" component={Login} />
                    <Route path="/my-account/register" component={Register} />
                    <Route
                        path="/my-account/details"
                        component={AccountDetails}
                    />
                </div>
            </BrowserRouter>
        </div>
    );
}

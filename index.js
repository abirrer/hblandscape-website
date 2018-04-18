const express = require("express");
const app = express();
const compression = require("compression");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const csrf = require("csurf");
const nodemailer = require("nodemailer");
const secrets = require("./secrets");
const { hashPassword, checkPassword } = require("./hash");
const { addNewUser, getPassword } = require("./db");

//Nodemailer setup

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.USER_ACCOUNT || secrets.userAccount,
        pass: process.env.USER_PASS || secrets.userPass
    }
});

const sendMail = message => {
    return new Promise((resolve, reject) => {
        transporter.sendMail(message, (error, info) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(info);
        });
    });
};

//MIDDLEWARE

app.use(express.static("public"));

app.use(compression());

const cookieSessionMiddleware = cookieSession({
    secret: process.env.SESSION_SECRET || require("./secrets").secret,
    maxAge: 1000 * 60 * 60 * 24 * 14 //this means 14 days of complete inactivity
});

app.use(cookieSessionMiddleware);

app.use(csrf());

app.use(function(req, res, next) {
    res.cookie("mytoken", req.csrfToken());
    next();
});

app.use(cookieParser());

app.use(compression());

if (process.env.NODE_ENV != "production") {
    app.use(
        "/bundle.js",
        require("http-proxy-middleware")({
            target: "http://localhost:8081/"
        })
    );
} else {
    app.use("/bundle.js", (req, res) => res.sendFile(`${__dirname}/bundle.js`));
}

app.use(
    bodyParser.urlencoded({
        extended: false
    })
);

app.use(bodyParser.json());

//ROUTES

app.post("/contact", (req, res) => {
    console.log("req.body: ", req.body);

    const {
        first,
        last,
        email,
        message,
        tel,
        preferredContact,
        projectType,
        city,
        projectRequirements
    } = req.body;

    const newMessage = {
        from: `${first} ${last} <${email}>`,
        to: "hblandscapeco@gmail.com",
        subject: `Request for Landscape Services from ${first} ${last}`,
        html: `<h1>You've received a request for a quote.</h1>
    <div><p><b>Name: </b>${first} ${last}</div>
    <div><p><b>Contact: </b>${tel} | ${email} (Please contact ${first} by ${preferredContact})</div>
    <div><p><b>Project Type: </b>${projectType} in ${city}</div>
    <div><p><b>Project Requirements: </b>${projectRequirements}</div>
    <div><p><b>General Message: </b>${message}`
    };

    sendMail(newMessage)
        .then(() => {
            console.log("sending email succeeded!");
            res.json({ success: true });
            // res.redirect('/example#contact-success');
        })
        .catch(error => {
            console.log("there was an error with sending email: ", error);
            // res.redirect('/example#contact-error')
        });
});

app.post("/my-account", (req, res) => {
    if (!req.body.email || !req.body.password) {
        console.log("login fields were not complete");

        res.json({
            success: false,
            error: "Please complete all fields before submitting."
        });
    } else {
        getPassword(req.body.email).then(getPasswordResult => {
            checkPassword(
                req.body.password,
                getPasswordResult.rows[0].hashed_password
            )
                .then(result => {
                    if (result == true) {
                        req.session.user = {
                            id: getPasswordResult.rows[0].id,
                            first: getPasswordResult.rows[0].first,
                            last: getPasswordResult.rows[0].last
                        };
                    } else {
                        console.log(
                            "login fields were not valid and login failed"
                        );

                        res.json({
                            success: false,
                            error:
                                "Please complete all fields before submitting."
                        });
                    }
                })
                .then(() => {
                    console.log(
                        "user login verification was successful and req.sessions were set!"
                    );

                    res.json({
                        success: true
                    });
                })
                .catch(error => {
                    console.log("error in /profile GET request: ", error);
                });
        });
    }
});

app.post("/my-account/register", (req, res) => {
    if (
        !req.body.first ||
        !req.body.last ||
        !req.body.email ||
        !req.body.password
    ) {
        console.log("new user register data fields were not complete");

        res.json({
            success: false,
            error: "Please complete all fields before submitting."
        });
    } else {
        hashPassword(req.body.password)
            .then(hashedPassword => {
                return addNewUser(
                    req.body.first,
                    req.body.last,
                    req.body.email,
                    hashedPassword
                );
            })
            .then(result => {
                console.log("req.session was set successful");

                req.session.user = {
                    id: result.rows[0].id,
                    first: result.rows[0].first,
                    last: result.rows[0].last
                };
            })
            .then(() => {
                console.log("new user registration was complete");

                res.json({
                    success: true
                });
            })
            .catch(error => {
                console.log(
                    "there was an error somewhere in register POST request: ",
                    error
                );
            });
    }
});

app.get("*", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.listen(process.env.PORT || 8080, function() {
    console.log("I'm listening.");
});

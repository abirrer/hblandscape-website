const express = require("express");
const app = express();
const compression = require("compression");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const secrets = require("./secrets.json");

//Nodemailer setup

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: secrets.userAccount,
        pass: secrets.userPass
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
            // res.redirect('/example#contact-success');
        })
        .catch(error => {
            console.log("there was an error with sending email: ", error);
            // res.redirect('/example#contact-error')
        });
});

app.get("*", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.listen(8080, function() {
    console.log("I'm listening.");
});

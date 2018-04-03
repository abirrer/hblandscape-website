const express = require("express");
const app = express();
const compression = require("compression");

//MIDDLEWARE

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

//ROUTES

app.get("*", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

app.listen(8080, function() {
    console.log("I'm listening.");
});

var spicedPg = require("spiced-pg");

if (!process.env.DATABASE_URL) {
    var { dbUser, dbPass } = require("./secrets.json");
}

var db = spicedPg(
    process.env.DATABASE_URL ||
        `postgres:${dbUser}:${dbPass}@localhost:5432/hblandscapeco`
);

//QUERIES

function addNewUser(first, last, email, password) {
    return db.query(
        `INSERT INTO users (first, last, email, hashed_password) VALUES ($1, $2, $3, $4) RETURNING *`,
        [first, last, email, password]
    );
}

function getPassword(email) {
    return db.query(
        `SELECT users.id, users.first, users.last, users.hashed_password FROM users WHERE email = $1`,
        [email]
    );
}

function getUserProfile(id) {
    return db.query(`SELECT * FROM users WHERE id = $1`, [id]);
}

exports.addNewUser = addNewUser;
exports.getPassword = getPassword;
exports.getUserProfile = getUserProfile;

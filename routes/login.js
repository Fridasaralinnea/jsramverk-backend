"use strict";

const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
// const sqlite3 = require('sqlite3').verbose();
const db = require("../db/database.js");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config/config.js');
const jwtSecret = config.jwtSecret;


/* POST login user. */
router.post(
    "/",
    body('email').isEmail(),
    (req, res) => {
    console.log("Login route reached for enpoint '/' using POST method with email: ", req.body.email, " and password: ", req.body.password);
    // const jwt = require('jsonwebtoken');
    var email = req.body.email;
    var pwd = req.body.password;
    var sql = `SELECT * FROM users WHERE email = ?`;

    db.get(sql, email, (err, row) => {
        // console.log("SQL get");
        // console.log(err);
        // console.log(row);
        if (err || !row) {
            console.log("Email invalid");
             return res.status(400).json({
                 errors: {
                     status: 400,
                     title: "Email invalid",
                     detail: "Could not find user: " + email
                 }
            });
        }

        bcrypt.compare(pwd, row.password, (err, valid) => {
            // console.log(pwd);
            // console.log(row.password);
            // console.log(row.email);
            // console.log(valid);
            if (valid) {
                const payload = { email: row.email };
                const token = jwt.sign(payload, jwtSecret, {expiresIn: '1h'});
                console.log(row.email + " is logged in.")
                return res.status(200).json({
                        status: 200,
                        user: payload,
                        idToken: token,
                        expiresIn: 3600,
                        msg: "User succesfully logged in"
                });
            } else {
                console.log("Error during login");
                return res.status(400).json({
                    errors: {
                        status: 400,
                        title: "Login Error",
                        detail: "Error during login"
                    }
                });
            }
        });
    });

});


module.exports = router;

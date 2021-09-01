"use strict";

const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/texts.sqlite');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config/config.js');
const jwtSecret = config.jwtSecret;


/* POST login user. */
router.post(
    "/",
    body('email').isEmail().normalizeEmail(),
    body('password').trim().escape(),
    (req, res, next) => {
    console.log("Login route reached for enpoint '/' using POST method with email: ", req.body.email, " and password: ", req.body.password);
    // const jwt = require('jsonwebtoken');
    var email = req.body.email;
    var pwd = req.body.password;
    var sql = `SELECT * FROM users WHERE email = ?`;

    db.get(sql, req.body.email, (err, row) => {
        if (err) {
             return res.status(400).json({
                data: {
                    msg: "Could not find user: " + email
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
                    data: {
                        msg: "Error during login"
                    }
                });
            }
        });
    });

});

// bcrypt.compare(myPlaintextPassword, hash, function(err, res) {
//     // res innehåller nu true eller false beroende på om det är rätt lösenord.
// });

// jwt.verify(token, process.env.JWT_SECRET, function(err, decoded) {
//     if (err) {
//         // not a valid token
//     }
//
//     // valid token
// });


module.exports = router;

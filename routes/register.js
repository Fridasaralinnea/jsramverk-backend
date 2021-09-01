const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/texts.sqlite');
const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const secret = process.env.JWT_SECRET;
// const saltRounds = 10;

/* POST to register new user. */
router.post(
    "/",
    body('email').isEmail().normalizeEmail(),
    (req, res, next) => {
    // console.log(req);
    var email = req.body.email;
    var password = req.body.password;
    const saltRounds = 10;

    bcrypt.hash(password, saltRounds, function(err, hash) {
        if (err) {
            console.log("bcrypt error");
            return res.status(500).json({
                errors: {
                    status: 500,
                    source: "/register",
                    title: "bcrypt error",
                    detail: "bcrypt error"
                }
            });
        }
        db.run(`INSERT INTO users (email, password) VALUES (?, ?)`,
            email,
            hash, (err) => {
                if (err) {
                    console.log("db error");
                    return res.status(500).json({
                        errors: {
                            status: 500,
                            source: "/register",
                            title: "Database error",
                            detail: err.message
                        }
                    });
                }
                return res.status(201).json({
                    data: {
                        msg: "New user succesfully registered"
                    }
                })
            });
        // if (err) {
        //     return res.status(500),json({
        //         errors: {
        //             status: 500,
        //             source: "/register",
        //             title: "Bcrypt error",
        //             detail: err.message
        //         }
        //     });
        // }


    });
})


module.exports = router;

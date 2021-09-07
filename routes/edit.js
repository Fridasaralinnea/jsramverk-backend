const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
// const sqlite3 = require('sqlite3').verbose();
const db = require("../db/database.js");
// const jwt = require('jsonwebtoken');
// const secret = process.env.JWT_SECRET;

/* GET Kmom01. */
router.get("/Kmom01", (req, res) => {
    var sql = `SELECT * FROM reports WHERE kmom = 'Kmom01'`;

    db.all(sql, (err, rows) => {
        if (err) {
            return res.status(500).json({
                errors: {
                    status: 500,
                    source: "/reports/edit",
                    title: "Database error",
                    detail: err.message
                }
            });
        }
        res.json({ data: rows[0] });
    })
});

/* GET Kmom02. */
router.get("/Kmom02", (req, res) => {
    var sql = `SELECT * FROM reports WHERE kmom = 'Kmom02'`;

    db.all(sql, (err, rows) => {
        if (err) {
            return res.status(500).json({
                errors: {
                    status: 500,
                    source: "/reports/edit",
                    title: "Database error",
                    detail: err.message
                }
            });
        }
        res.json({ data: rows[0] });
    })
});

/* GET Kmom03. */
router.get("/Kmom03", (req, res) => {
    var sql = `SELECT * FROM reports WHERE kmom = 'Kmom03'`;

    db.all(sql, (err, rows) => {
        if (err) {
            return res.status(500).json({
                errors: {
                    status: 500,
                    source: "/reports/edit",
                    title: "Database error",
                    detail: err.message
                }
            });
        }
        res.json({ data: rows[0] });
    })
});

/* GET Kmom04. */
router.get("/Kmom04", (req, res) => {
    var sql = `SELECT * FROM reports WHERE kmom = 'Kmom04'`;

    db.all(sql, (err, rows) => {
        if (err) {
            return res.status(500).json({
                errors: {
                    status: 500,
                    source: "/reports/edit",
                    title: "Database error",
                    detail: err.message
                }
            });
        }
        res.json({ data: rows[0] });
    })
});

/* GET Kmom05. */
router.get("/Kmom05", (req, res) => {
    var sql = `SELECT * FROM reports WHERE kmom = 'Kmom05'`;

    db.all(sql, (err, rows) => {
        if (err) {
            return res.status(500).json({
                errors: {
                    status: 500,
                    source: "/reports/edit",
                    title: "Database error",
                    detail: err.message
                }
            });
        }
        res.json({ data: rows[0] });
    })
});

/* GET Kmom06. */
router.get("/Kmom06", (req, res) => {
    var sql = `SELECT * FROM reports WHERE kmom = 'Kmom06'`;

    db.all(sql, (err, rows) => {
        if (err) {
            return res.status(500).json({
                errors: {
                    status: 500,
                    source: "/reports/edit",
                    title: "Database error",
                    detail: err.message
                }
            });
        }
        res.json({ data: rows[0] });
    })
});

/* GET Kmom10. */
router.get("/Kmom10", (req, res) => {
    var sql = `SELECT * FROM reports WHERE kmom = 'Kmom10'`;

    db.all(sql, (err, rows) => {
        if (err) {
            return res.status(500).json({
                errors: {
                    status: 500,
                    source: "/reports/edit",
                    title: "Database error",
                    detail: err.message
                }
            });
        }
        res.json({ data: rows[0] });
    })
});


router.post(
    "/",
    body('kmom').trim(),
    body('info').trim(),
    (req, res) => {
    console.log(res.req.body);
    var kmom = res.req.body.kmom;
    var info = res.req.body.info;
    var sql = `UPDATE reports SET info = ? WHERE kmom = ?`;

    if (!kmom || !info) {
        return res.status(401).json({
            errors: {
                status: 401,
                source: "/reports/edit",
                title: "Kmom or info missing",
                detail: "Kmom or info missing"
            }
        });
    }
    db.run(sql, info, kmom, (err) => {
            if (err) {
                return res.status(500).json({
                    errors: {
                        status: 500,
                        source: "/reports/edit",
                        title: "Database error",
                        detail: err.message
                    }
                });
            }
            return res.status(201).json({
                data: {
                    message: "Info succesfully edited."
                }
            });
        }
    );
});

module.exports = router;

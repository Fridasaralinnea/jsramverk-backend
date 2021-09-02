const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/texts.sqlite');
// const jwt = require('jsonwebtoken');
// const secret = process.env.JWT_SECRET;

/* GET Kmom01. */
router.get("/week/1", (req, res) => {
    var sql = `SELECT * FROM reports WHERE kmom = 'Kmom01'`;

    db.all(sql, (err, rows) => {
        if (err) {
            return res.status(500),json({
                errors: {
                    status: 500,
                    source: "/reports/week/1",
                    title: "Database error",
                    detail: err.message
                }
            });
        }
        res.json({ data: rows[0] });
    })
});

/* GET Kmom02. */
router.get("/week/2", (req, res) => {
    var sql = `SELECT * FROM reports WHERE kmom = 'Kmom02'`;

    db.all(sql, (err, rows) => {
        if (err) {
            return res.status(500),json({
                errors: {
                    status: 500,
                    source: "/reports/week/2",
                    title: "Database error",
                    detail: err.message
                }
            });
        }
        res.json({ data: rows[0] });
    })
});

/* GET Kmom03. */
router.get("/week/3", (req, res) => {
    var sql = "select * from reports where kmom = 'Kmom03'";

    db.all(sql, (err, rows) => {
        if (err) {
            return res.status(500),json({
                errors: {
                    status: 500,
                    source: "/reports/week/3",
                    title: "Database error",
                    detail: err.message
                }
            });
        }
        res.json({ data: rows[0] });
    })
});

/* GET Kmom04. */
router.get("/week/4", (req, res) => {
    var sql = "select * from reports where kmom = 'Kmom04'";

    db.all(sql, (err, rows) => {
        if (err) {
            return res.status(500),json({
                errors: {
                    status: 500,
                    source: "/reports/week/4",
                    title: "Database error",
                    detail: err.message
                }
            });
        }
        res.json({ data: rows[0] });
    })
});

/* GET Kmom05. */
router.get("/week/5", (req, res) => {
    var sql = "select * from reports where kmom = 'Kmom05'";

    db.all(sql, (err, rows) => {
        if (err) {
            return res.status(500),json({
                errors: {
                    status: 500,
                    source: "/reports/week/5",
                    title: "Database error",
                    detail: err.message
                }
            });
        }
        res.json({ data: rows[0] });
    })
});

/* GET Kmom06. */
router.get("/week/6", (req, res) => {
    var sql = "select * from reports where kmom = 'Kmom06'";

    db.all(sql, (err, rows) => {
        if (err) {
            return res.status(500),json({
                errors: {
                    status: 500,
                    source: "/reports/week/6",
                    title: "Database error",
                    detail: err.message
                }
            });
        }
        res.json({ data: rows[0] });
    })
});

/* GET Kmom10. */
router.get("/week/10", (req, res) => {
    var sql = "select * from reports where kmom = 'Kmom10'";

    db.all(sql, (err, rows) => {
        if (err) {
            return res.status(500),json({
                errors: {
                    status: 500,
                    source: "/reports/week/5",
                    title: "Database error",
                    detail: err.message
                }
            });
        }
        res.json({ data: rows[0] });
    })
});


// router.post("/reports",
//     (req, res, next) => checkToken(req, res, next),
//     (req, res) => reports.addReport(res, req.body));
//
// function checkToken(req, res, next) {
//     const token = req.headers['x-access-token'];
//
//     jwt.verify(token, process.env.JWT_SECRET, function(err, decoded) {
//         if (err) {
//             // send error response
//         }
//
//         // Valid token send on the request
//         next();
//     });
// }


// function addReport(res, body) {
//     const title = body.title;
//     const info = body.info;
//
//     if (!title || !info) {
//         return res.status(401).json({
//             errors: {
//                 status: 401,
//                 source: "/reports",
//                 title: "Title or info missing",
//                 detail: "Title or info missing in request"
//             }
//         });
//     }
//     db.run("INSERT INTO reports (title, info) VALUES (?, ?)",
//         title,
//         info, (err) => {
//             if (err) {
//                 return res.status(500).json({
//                     errors: {
//                         status: 500,
//                         source: "/reports",
//                         title: "Database error",
//                         detail: err.message
//                     }
//                 });
//             }
//
//             return res.status(201).json({
//                 data: {
//                     message: "Info succesfully added."
//                 }
//             });
//         }
//     );
// }


module.exports = router;

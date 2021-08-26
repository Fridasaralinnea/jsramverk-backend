const express = require("express");
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require("body-parser");
const bcrypt = require('bcryptjs');
// const sqlite3 = require('sqlite3').verbose();
const jwt = require('jsonwebtoken');

const index = require('./routes/index');
const reports = require('./routes/reports');
const register = require('./routes/register');
const login = require('./routes/login');
const edit = require('./routes/edit');

const app = express();
const port = 1337;

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/texts.sqlite');

app.use(cors());

// const saltRounds = 10;
// const myPlaintextPassword = 'longandhardP4$w0rD';
// const hash = 'superlonghashedpasswordfetchedfromthedatabase';

// GzSdd485scQ/fUvPIHOsoJSEEE70VQIzLgyBekeBZJuv4Edc3vW4nADvh4gVNt16aIf905dsBs5YFOjYfgRh5w==

// const payload = { email: "user@example.com" };
// const secret = process.env.JWT_SECRET;
//
// const token = jwt.sign(payload, secret, { expiresIn: '1h'});

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

db.run("INSERT INTO reports (kmom, info) VALUES (?, ?)",
    "Kmom01",
    "GitHub repo: 'https://github.com/Fridasaralinnea/jsramverk-me-frontend'\n MeFrontendAngular\n This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.0.\n Development server \n Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.\n Code scaffolding\n Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.\n Build\n Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.\n Running unit tests\n Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).\n Running end-to-end tests\n Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).\n Further help\n To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).", (err) => {
        if (err) {
            // err
        }
    });

db.run("INSERT INTO reports (kmom, info) VALUES (?, ?)",
    "Kmom02",
    "GitHub repo frontend: 'https://github.com/Fridasaralinnea/jsramverk-me-frontend'. GitHub repo backend: -- README.md - backend: **npm init npm install express cors morgan --save npm install -g nodemon npm install sqlite3 --save //install as admin in PowerShell npm install --global --production windows-build-tools npm install bcryptjs --save npm install jsonwebtoken --save ", (err) => {
        if (err) {
            // err
        }
    });

db.run("INSERT INTO reports (kmom, info) VALUES (?, ?)",
    "Kmom03",
    "<a href='https://github.com/Fridasaralinnea/jsramverk-me-frontend'>Link</a> to my GitHub repo.", (err) => {
        if (err) {
            // err
        }
    });

db.run("INSERT INTO reports (kmom, info) VALUES (?, ?)",
    "Kmom04",
    "<a href='https://github.com/Fridasaralinnea/jsramverk-me-frontend'>Link</a> to my GitHub repo.", (err) => {
        if (err) {
            // err
        }
    });

db.run("INSERT INTO reports (kmom, info) VALUES (?, ?)",
    "Kmom05",
    "<a href='https://github.com/Fridasaralinnea/jsramverk-me-frontend'>Link</a> to my GitHub repo.", (err) => {
        if (err) {
            // err
        }
    });

db.run("INSERT INTO reports (kmom, info) VALUES (?, ?)",
    "Kmom06",
    "<a href='https://github.com/Fridasaralinnea/jsramverk-me-frontend'>Link</a> to my GitHub repo.", (err) => {
        if (err) {
            // err
        }
    });

db.run("INSERT INTO reports (kmom, info) VALUES (?, ?)",
    "Kmom10",
    "<a href='https://github.com/Fridasaralinnea/jsramverk-me-frontend'>Link</a> to my GitHub repo.", (err) => {
        if (err) {
            // err
        }
    });

db.close();




// don't show the log when it is test
if (process.env.NODE_ENV !== 'test') {
    // use morgan to log at command line
    app.use(morgan('combined')); // 'combined' outputs the Apache style LOGs
}

// Add a route
app.use('/', index);
app.use('/reports', reports);
app.use('/reports/edit', edit);
app.use('/register', register);
app.use('/login', login);




// Add routes for 404 and error handling
// Catch 404 and forward to error handler
// Put this last
app.use((req, res, next) => {
    var err = new Error("Not Found");
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }

    res.status(err.status || 500).json({
        "errors": [
            {
                "status": err.status,
                "title":  err.message,
                "detail": err.message
            }
        ]
    });
});

// Start up server
app.listen(port, () => console.log(`Example API listening on port ${port}!`));

// module.exports = server;

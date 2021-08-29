CREATE TABLE IF NOT EXISTS users (
    email VARCHAR(255) NOT NULL,
    password VARCHAR(60) NOT NULL,
    UNIQUE(email)
);

CREATE TABLE IF NOT EXISTS reports (
    kmom VARCHAR(6) NOT NULL,
    info VARCHAR(600),
    UNIQUE(kmom)
);

INSERT INTO reports (kmom, info) VALUES (
    "Kmom01",
    "GitHub repo: 'https://github.com/Fridasaralinnea/jsramverk-me-frontend'\n MeFrontendAngular\n This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.0.\n Development server \n Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.\n Code scaffolding\n Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.\n Build\n Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.\n Running unit tests\n Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).\n Running end-to-end tests\n Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).\n Further help\n To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md)."
);

INSERT INTO reports (kmom, info) VALUES (
    "Kmom02",
    "GitHub repo frontend: 'https://github.com/Fridasaralinnea/jsramverk-me-frontend'. GitHub repo backend: https://github.com/Fridasaralinnea/jsramverk-backend README.md - backend: **npm init npm install express cors morgan --save npm install -g nodemon npm install sqlite3 --save //install as admin in PowerShell npm install --global --production windows-build-tools npm install bcryptjs --save npm install jsonwebtoken --save "
);

INSERT INTO reports (kmom, info) VALUES (
    "Kmom03",
    "GitHub repo frontend: 'https://github.com/Fridasaralinnea/jsramverk-me-frontend'. GitHub repo backend: https://github.com/Fridasaralinnea/jsramverk-backend"
);

INSERT INTO reports (kmom, info) VALUES (
    "Kmom04",
    "GitHub repo frontend: 'https://github.com/Fridasaralinnea/jsramverk-me-frontend'. GitHub repo backend: https://github.com/Fridasaralinnea/jsramverk-backend"
);

INSERT INTO reports (kmom, info) VALUES (
    "Kmom05",
    "GitHub repo frontend: 'https://github.com/Fridasaralinnea/jsramverk-me-frontend'. GitHub repo backend: https://github.com/Fridasaralinnea/jsramverk-backend"
);

INSERT INTO reports (kmom, info) VALUES (
    "Kmom06",
    "GitHub repo frontend: 'https://github.com/Fridasaralinnea/jsramverk-me-frontend'. GitHub repo backend: https://github.com/Fridasaralinnea/jsramverk-backend"
);

INSERT INTO reports (kmom, info) VALUES (
    "Kmom10",
    "GitHub repo frontend: 'https://github.com/Fridasaralinnea/jsramverk-me-frontend'. GitHub repo backend: https://github.com/Fridasaralinnea/jsramverk-backend"
);

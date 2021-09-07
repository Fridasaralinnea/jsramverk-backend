var express = require('express');
var router = express.Router();

/* Home page */
router.get('/', function(req, res) {
    const data = {
        title: "Welcome",
        info: "Hello and welcome to my me-page in Angular. My name is Frida Larsson and I'm 26 years old. I'm born and raised in a small town called Falkenberg, on the west-coast of Sweden. For the last two and a half years I've been mostly traveling or working abroad but for the time being I am back in Sweden"
    };

    res.json(data);
});

module.exports = router;

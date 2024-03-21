var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    var a = Math.random() * 150;
    var b = Math.random() * 250;
    var c = Math.random() * 300;

    var funcOne = Math.fround(a);
    var funcTwo = Math.random(b);
    var funcThree = Math.round(c);

    res.send(`Random no's are ${a}, ${b} and ${c} <br>
    Math.fround applied to ${a} is ${funcOne} <br>
    Math.random applied to ${b} is ${funcTwo} <br>
    Math.round applied to ${c} is ${funcThree}`);
});

module.exports = router;

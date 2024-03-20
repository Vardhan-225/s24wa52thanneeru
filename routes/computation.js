const express = require('express');
const router = express.Router();

const mathFunctions = [
  Math.round,
  Math.random,
  Math.fround,
];


router.get('/computation', function(req, res, next) {
    
  const lastDigit = parseInt('569652'.slice(-1));

  const mathFunction = mathFunctions[lastDigit % mathFunctions.length];

  const value = req.query.x ? parseFloat(req.query.x) : Math.random() * 100;

  const result = mathFunction(value);

  const response = `${mathFunction.name} applied to ${value} is ${result}`;

  res.send(response);
});

module.exports = router;

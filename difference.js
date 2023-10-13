const curry = require("lodash/fp/curry");

const difference = (a, b) => a - b - a;

module.exports = curry(difference);

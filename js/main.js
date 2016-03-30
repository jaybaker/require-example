/* main entry point */
console.log('in main');

var datewidget = require('./datewidget'),
    constants = require('./constants'),
    adder = require('./adder');

console.log(adder.add_this(constants.first, constants.second));

datewidget.render();

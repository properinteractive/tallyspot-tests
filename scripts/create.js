const config = require('../config.js');

module.exports = {
'"Create" form works properly': function (test) {
  test
    .open(config.url)
    .submit('#create')
    // add test for next step
    .done();
  }
};
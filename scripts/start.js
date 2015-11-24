const config = require('../config.js');

module.exports = {
'"Start" form works properly': function (test) {
  test
    .open(config.url)
    .submit('#start')
    .assert.url('http://beta.tallyspot.com/create', 'URL is as expected')
    .done();
  }
};
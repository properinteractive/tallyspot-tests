const config = require('../config.js');

module.exports = {
'"Create" form works properly': function (test) {
  test
    .open(config.url)
    .submit('#create')
    // add test for next step
    // .assert.url('http://beta.tallyspot.com/create', 'URL is as expected')
    .done();
  }
};
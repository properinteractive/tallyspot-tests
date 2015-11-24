const config = require('../config.js');

module.exports = {
'"Start" form works properly': function (test) {
  test
    .open(config.url)
    .submit('#start')
    .assert.url(config.beta_url + 'create', 'URL is as expected')
    .done();
  }
};
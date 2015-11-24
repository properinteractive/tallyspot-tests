const config = require('../config.js');

module.exports = {
'"Start" form works properly': function (test) {
  const url = config.url.staging
  test
    .open(url)
    .submit('#start')
    .assert.url(url + 'create', 'URL is as expected')
    .done();
  }
};
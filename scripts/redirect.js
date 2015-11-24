const config = require('../config.js');

module.exports = {
'Beta redirect is functioning': function (test) {
  test
    .open(config.url)
    .assert.url(config.beta_url, 'URL is as expected')
    .done();
  }
};
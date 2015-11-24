const config = require('../config.js');

module.exports = {
'Beta redirect is functioning': function (test) {
  test
    .open(config.url.prod)
    .assert.url(config.url.beta, 'URL is as expected')
    .done();
  }
};
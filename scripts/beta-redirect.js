const config = require('../config.js');

module.exports = {
  'Beta redirect is functioning': function testBetaRedirect(test) {
    test
    .open(config.url.prod)
    .wait(2000)
    .assert.url(config.url.beta, 'URL is as expected')
    .done();
  }
};

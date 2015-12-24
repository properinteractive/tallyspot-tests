const config = require('../config.js');

module.exports = {
  'Beta redirect is functioning': function testBetaRedirect(browser) {
    browser
      .url(config.url.prod)
      .pause(3000)
      .assert.urlEquals(config.url.beta)
      .end();
  }
};

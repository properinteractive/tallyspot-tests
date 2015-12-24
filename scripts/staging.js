const config = require('../config.js');

module.exports = {
  'Staging is up and running': function testStaging(browser) {
    const url = config.url.staging;
    browser
      .url(url)
      .pause(3000)
      .assert.urlEquals(url)
      .assert.title('tallyspot')
      .end();
  }
};

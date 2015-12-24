const config = require('../config.js');

module.exports = {
  'Page title is correct for Production': function testHtmlTitle(browser) {
    browser
      .url(config.url.prod)
      .assert.title('tallyspot')
      .end();
  }
};

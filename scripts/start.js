const config = require('../config.js');

module.exports = {
  '"Start" form works properly': function testStartForm(browser) {
    const url = config.url.staging;
    browser
      .url(url)
      .submitForm('#start')
      .assert.urlEquals(url + 'create')
      .end();
  }
};

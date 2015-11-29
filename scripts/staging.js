const config = require('../config.js');

module.exports = {
  'Staging is up and running': function testStaging(test) {
    const url = config.url.staging;
    test
    .open(url)
    .assert.url(url, 'URL is as expected')
    .assert.title().is('tallyspot', 'Title is as expected')
    .done();
  }
};

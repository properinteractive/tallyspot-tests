const config = require('../config.js');

module.exports = {
  'Page title is correct for Production': function testHtmlTitle(test) {
    test
    .open(config.url.prod)
    .assert.title().is('tallyspot', 'Title is as expected')
    .done();
  }
};

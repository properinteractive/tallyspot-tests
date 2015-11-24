const config = require('../config.js');

module.exports = {
'Page title is correct for Production': function (test) {
  test
    .open(config.url.prod)
    .assert.title().is('tallyspot', 'It has title')
    .done();
  }
};
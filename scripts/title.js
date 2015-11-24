const config = require('../config.js');

module.exports = {
'Page title is correct': function (test) {
  test
    .open(config.url)
    .assert.title().is('tallyspot', 'It has title')
    .done();
  }
};
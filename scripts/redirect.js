const config = require('../config.js');

module.exports = {
'Beta redirect is functioning': function (test) {
  test
    .open(config.url)
    .assert.url('http://beta.tallyspot.com/', 'URL is as expected')
    .done();
  }
};
const config = require('../config.js');

module.exports = {
'"Create" form works properly': function (test) {
  const url = config.url.staging;
  test
    .open(url + 'create')
    .execute(function () {
       window.document.querySelector('select[name="date"] option:last-of-type').selected = true;
     })
    .submit('#create')
    .assert.url(url + 'create', 'URL is as expected')
    .done();
  }
};
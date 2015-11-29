const config = require('../config.js');

module.exports = {
  '"Create" form works properly': function testCreateForm(test) {
    const url = config.url.staging;
    test
    .open(url + 'create')
    .submit('#create')
    .wait(1000)
    .assert.text('.app div.help').is('Start by adding up to three locations for friends to vote on', 'Help text is as expected')
    .assert.text('#add-option a.inline.button').is('Add +', 'Button text is as expected')
    .done();
  }
};

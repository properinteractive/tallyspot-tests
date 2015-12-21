const config = require('../config.js');

module.exports = {
  '"Create" form works properly': function testCreateForm(test) {
    const url = config.url.staging;
    test
    // Open the /create url
    .open(url + 'create')
    // @todo: set custom time
    // Submit the create form
    .submit('#create')
    .wait(3000)
    // Since the url is generated randomly, let's test the content of the page to make sure we're in the right place
    .assert.text('.app div.help').is('Start by adding up to three locations for friends to vote on', 'Help text is as expected')
    .assert.text('#add-option a.inline').is('Add +', 'Button text is as expected')
    // Fill out the first option and submit
    .type('#autocomplete', 'Test One')
    .click('#add-option a.inline')
    .wait(2000)
    .assert.text('.app div.help').is('Add at least one more location', 'Help text is as expected')
    // Fill out the second option and submit
    .type('#autocomplete', 'Test Two')
    .click('#add-option a.inline')
    .wait(2000)
    .assert.text('.app div.help').is('You can add one last option, or hit Next to invite friends and open the voting now', 'Help text is as expected')
    .assert.text('#add-option a.inline').is('Add 1 more', 'Button text is as expected')
    // Fill out the third option and submit
    .type('#autocomplete', 'Test Three')
    .click('#add-option a.inline')
    .wait(2000)
    // Check that each of the options were created properly
    .assert.text('.leaderboard li.option:nth-of-type(1) span.name').is('Test One', 'First option text is as expected')
    .assert.text('.leaderboard li.option:nth-of-type(2) span.name').is('Test Two', 'Second option text is as expected')
    .assert.text('.leaderboard li.option:nth-of-type(3) span.name').is('Test Three', 'Third option text is as expected')
    // Select the first option and vote
    .click('.leaderboard li.option:nth-of-type(1) a')
    .wait(2000)
    .click('button.vote')
    .assert.text('.leaderboard li.option:nth-of-type(1) span.score').is('1', 'Voting working as expected')
    // Refresh browser and then...
    .reload()
    // select the first option and attempt to vote again
    .click('.leaderboard i.option:nth-of-type(1) a')
    .assert.doesntExist('button.vote', 'The vote button is removed as expected')
    .assert.text('.leaderboard + .help').to.contain('Hey now, you\'ve already voted.', 'Help text for users attempting to vote twice is working as expected')
    // Remove the selected option
    .click('body')
    // Click the link to change the voting deadline
    .click('.leaderboard + .help a')
    .wait(3000)
    // Check that the url updated properly
    .assert.url().to.contain('deadline')
    // Check the value of the [name="date"] select
    .assert.text('select[name="date"] option:nth-of-type(1)').is('Today', 'First date option text is as expected')
    .done();
  }
};

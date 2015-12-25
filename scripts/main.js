// @todo: break this into multiple tests
const config = require('../config.js');

module.exports = {
  'Successful tally creation, voting, editing, and sharing': function successfulTally(browser) {
    const url = config.url.staging;
    browser
    // Open the /create url
    .url(url + 'create')
    // Let's choose a date in the past and make sure that creating the tally fails
    .execute(function choosePastDate() {
      const selected = document.querySelector('[name="hour"]').selectedIndex;
      document.querySelector('[name="hour"] option:nth-of-type(' + selected + ')').selected = true;
    })
    // Submit the create form
    .submitForm('#create')
    .pause(3000)
    // We're still at the same url...
    .assert.urlContains('create')
    // and are prompted to use a date and time in the future
    .assert.containsText('.messages', 'Please choose a date and time in the future!')
    // Choose a valid date tomorrow
    .execute(function chooseDate() {
      document.querySelector('[name="date"] option:nth-of-type(2)').selected = true;
    })
    // Submit the create form again with a accepted event time
    .submitForm('#create')
    .pause(3000)
    // Since the url is generated randomly, let's test the content of the page to make sure we're in the right place
    .assert.containsText('#add-option a.inline', 'Add +')
    // Fill out the first option and submit
    .setValue('#autocomplete', 'Test One')
    .click('#add-option a.inline')
    .pause(2000)
    .assert.containsText('.app div.help', 'Add at least one more location')
    // Fill out the second option and submit
    .setValue('#autocomplete', 'Test Two')
    .click('#add-option a.inline')
    .pause(2000)
    .assert.containsText('.app div.help', 'You can add one last option, or hit Next to invite friends and open the voting now')
    .assert.containsText('#add-option a.inline', 'Add 1 more')
    // Check that the 'Next' button is now available
    .assert.elementPresent('#close-list button')
    // Fill out the third option and submit form
    .setValue('#autocomplete', 'Test Three')
    .click('#add-option a.inline')
    .pause(2000)
    // Check that each of the options were created properly
    .assert.containsText('.leaderboard li.option:nth-of-type(1) span.name', 'Test One')
    .assert.containsText('.leaderboard li.option:nth-of-type(2) span.name', 'Test Two')
    .assert.containsText('.leaderboard li.option:nth-of-type(3) span.name', 'Test Three')
    // Select the first option and vote
    .click('.leaderboard li.option:nth-of-type(1) a')
    .pause(2000)
    .click('button.vote')
    .assert.containsText('.leaderboard li.option:nth-of-type(1) span.score', '1')
    // Refresh browser and then...
    .refresh()
    // select the first option and attempt to vote again
    .click('.leaderboard li.option:nth-of-type(1) a')
    .assert.elementNotPresent('button.vote')
    .assert.containsText('.leaderboard + .help', 'Hey now, you\'ve already voted.')
    // Remove the selected option
    .click('body')
    // Click the link to change the voting deadline
    .click('.leaderboard + .help a')
    .pause(3000)
    // Check that the url updated properly
    .assert.urlContains('deadline')
    // Check the value of the [name="date"] select
    .assert.containsText('select[name="date"] option:nth-of-type(1)', 'Today')
    // Click the 'Cancel' button to see make sure we can cancel out of updating
    .click('form#deadline a.button')
    .pause(3000)
    // Click the link to change the voting deadline again! This time we won't cancel
    .click('.leaderboard + .help a')
    .pause(3000)
    // Check that the url updated properly
    .assert.urlContains('deadline')
    // Check the value of the [name="date"] select
    .assert.containsText('select[name="date"] option:nth-of-type(1)', 'Today')
    // Set the deadline for voting to tomorrow
    .execute(function setDeadline() {
      document.querySelector('[name="date"] option:nth-of-type(2)').selected = true;
    })
    // Click the 'Save' button
    .click('form#deadline button')
    .pause(3000)
    .end();
  }
};

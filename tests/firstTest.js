module.exports = {
  '@disable': true,
  'My First Test Case' (browser) {
    browser
      .url('https://news.ycombinator.com')
      .waitForElementVisible('.hnname')
      .assert.containsText('.hnname', 'Hacker News')
  }
}

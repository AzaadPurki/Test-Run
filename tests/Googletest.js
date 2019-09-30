module.exports = {
  '@tags': ['google'],
  '@disable': true,
  'Google Advance Search : Elon mask' (browser) {
    const mainquery = 'Elon Mask'
    const page = browser.page.googleAdvanceSearch()

    page
      .navigate()
      .setQuery(mainquery)
      .selectFilter('@languageDropdown', 'lang_it')
      .selectFilter('@lastUpdateDropdown', 'm')
      .search()

    const resultPageQuerySelector = `#searchform input[name="q"][Value="${mainquery}"]`
    const SearchResultPageLanguageSelector = '[aria-label="Search Italian pages"]'
    const SearchResultPageLastUpdateSelector = '[aria-label="Past month"]'

    browser
      .assert.urlContains('as_q=Elon+Mask', 'Param: Main Query is Elon Mask')
      .assert.urlContains('lr=lang_it', 'Param: Language is Italian')
      .assert.urlContains('as_qdr=m', 'Param: Time Period is Last Month')

      .assert.visible(resultPageQuerySelector, 'UI : Elon Mask is in Query')
      .assert.containsText(SearchResultPageLanguageSelector, 'Search Italian pages', 'UI : language is Italian')
      .assert.containsText(SearchResultPageLastUpdateSelector, 'Past month', 'UI : Last Update is Past Month')
      .saveScreenshot('tests_output/google.png')
  }
}

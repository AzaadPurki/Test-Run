module.exports = {
    '@tags' : ['google'],
    'Google Advance Search : Elon mask' (browser){
        const mainquery = 'Elon Mask';

        const mainqueryInputSellector = "input[name='as_q']";      
        const languageDropdownOpenerSellector = "#lr_button";
        const languageDropdownValueSellector = ".goog-menuitem[value='lang_it']";
        const lastUpdateDropdownOpenerSellector = "#as_qdr_button";
        const lastUpdateDropdownValueSellector = ".goog-menuitem[value='m']";
        const submitButtonSelector = '.jfk-button[type="submit"]';
        const resultPageQuerySelector = `#searchform input[name="q"][Value="${mainquery}"]`;
        const SearchResultPageLanguageSelector = '[aria-label="Search Italian pages"]';
        const SearchResultPageLastUpdateSelector = '[aria-label="Past month"]';
        
    
        
        browser
        .url('https://www.google.com/advanced_search')
        .setValue(mainqueryInputSellector, mainquery)
     
        .click(languageDropdownOpenerSellector)
        .click(languageDropdownValueSellector)
        .click(lastUpdateDropdownOpenerSellector)
        .click(lastUpdateDropdownValueSellector)
        .click(submitButtonSelector)
        .assert.urlContains('as_q=Elon+Mask','Param: Main Query is Elon Mask')
        .assert.urlContains('lr=lang_it','Param: Language is Italian')
        .assert.urlContains('as_qdr=m','Param: Time Period is Last Month')
        
        .assert.visible(resultPageQuerySelector,'UI : Elon Mask is in Query')
        .assert.containsText(SearchResultPageLanguageSelector,'Search Italian pages','UI : language is Italian')
        .assert.containsText(SearchResultPageLastUpdateSelector,'Past month','UI : Last Update is Past Month')
   

        .saveScreenshot('tests_output/google.png')
       
    }
}
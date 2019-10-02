const chrome = require('chromedriver')

module.exports = {
  src_folders: ['tests'],
  page_objects_path: ['page-objects'],

  webdriver: {
    start_process: true,
    server_path: chrome.path,
    port: 9515
  },

  test_settings: {
    default: {
      screenshots: {
        enable: 'true',
        on_failure: 'true',
        on_error: 'true',
        path: 'tests_outputs/screenshots'
      },
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions:
        {
          args: ['--headless']
        }
      }
    }
  }
}

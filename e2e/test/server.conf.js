const SeleniumServer = require('selenium-server');
const ChromeDriver = require('chromedriver');

module.exports = {
   //src_folders: ['e2e/test/specs/ENSAA_Actions/TestTickets/ENSSAFlowAdmin'],
    //src_folders: ['e2e/test/TestTickets/SSP-56.js'],
    //src_folders: ['e2e/test/specs/ExcelTest/excelhandle.js'],
    //src_folders: ['e2e/test/specs/ExcelTest'],
    //src_folders: ['e2e/test/TestTickets/MVP-62.js'],
    //src_folders: ['e2e/test/specs/CurrentTests/ManageUser.js'],
    //src_folders: ['e2e/test/specs/CurrentTests/FileManagement.js'],
    //src_folders: ['e2e/test/specs/CurrentTests/DeviceManagement.js'],
    src_folders: ['e2e/test/specs/Regression/ENSSARegression.js'],
    output_folder: 'output/reports',
    globals_path: 'e2e/test/globals.js',
    page_objects_path: 'e2e/test/specs/Page_Objects',
    custom_commands_path: 'e2e/test/customcommands',

    selenium : {
        start_process : false
    },

    test_settings: {
        default: {
            selenium_port  : 9515,
            selenium_host  : "localhost",
            silent: true,
            end_session_on_fail: false,
            skip_testcases_on_fail: false,
            default_path_prefix : "",
            screenshots: {
                enabled: false,
                on_failure: true,
                on_error: true,
                path: 'output/screenshots',
            },
            globals: {
                devServerURL: 'http://localhost:1234'
            },
        },

        chrome: {
            globals: {
                driver_port: 9515,
                devServerURL: 'http://localhost:1234'
            },
            desiredCapabilities: {
                browserName: 'chrome',
                javascriptEnabled: true,
                acceptSslCerts: true,
                chromeOptions: {
                    args: ['--headless', '--disable-gpu','--no-sandbox', 'window-size=1366,768' ],
                    binary: process.env.CHROME_BIN,
                }
            }
        },

        firefox: {
            globals: {
                driver_port: 9515,
            },
            desiredCapabilities: {
                browserName: 'firefox',
                javascriptEnabled: true,
                acceptInsecureCerts: true,
                'moz:firefoxOptions': {
                    'args': ['--headless']
                }
            }
        },

        ie: {
            desiredCapabilities: {
                browserName: 'internet explorer',
                platform: 'WINDOWS',
                javascriptEnabled: true,
                acceptSslCerts: true,
                ensureCleanSession: true
            }
        }
    }
};

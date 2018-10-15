const SeleniumServer = require('selenium-server');
const ChromeDriver = require('chromedriver');

module.exports = {
    //src_folders: ['e2e\\test\\specs\\CurrentTests\\DeviceManagement.js'],
    //src_folders: ['e2e\\test\\specs\\CurrentTests\\AuthService.js'],
   //src_folders: ['e2e\\test\\specs\\CurrentTests\\FileManagement.js'],
    //src_folders: ['e2e\\test\\specs\\CurrentTests\\Edit User.js'],
    //src_folders: ['e2e\\test\\specs\\ENSAA_Actions\\UserLogin.js'],
    //src_folders: ['e2e\\test\\specs\\ENSAA_Actions\\UserForgotPwd.js'],
    //src_folders: ['e2e\\test\\specs\\ENSAA_Actions\\UserChangePassword.js'],
    //src_folders: ['e2e\\test\\specs\\ENSAA_Actions\\ENSSAUserFlow.js'],
    //src_folders: ['e2e\\test\\specs\\ENSAA_Actions\\excelhandle.js'],
    src_folders: ['e2e\\test\\specs\\ENSAA_Actions\\AdminLogin.js'],
    //src_folders: ['e2e\\test\\specs\\ENSAA_Actions'],
    //src_folders: ['e2e\\test\\specs\\ENSAA_Actions\\excelhandlearray.js'],
    //src_folders: ['e2e\\test\\specs\\CurrentTests\\FileManagement.js'],
   // src_folders: ['e2e\\test\\specs\\CurrentTests\\excelhandle.js'],
   //src_folders: ['e2e\\test\\TestTickets\\MVP-62.js'],
   // src_folders: ['e2e/test/specs/Regression/ENSSARegression.js'],
    output_folder: 'output/reports',
    globals_path: 'e2e/test/globals.js',
    page_objects_path: 'e2e/test/specs/Page_Objects',

    selenium : {
        start_process : false
    },

    test_settings: {
        default: {
            selenium_port: 9515,
            selenium_host: 'localhost',
            silent: true,
            launchUrl: 'http://enssa-enssa-web-mvp-11.review-apps.tepay.ae',
            default_path_prefix : "",
            screenshots: {
                enabled: true,
                "on_failure" : true,
                "on_error" : true,
                path: 'output/screenshots',
//                "end_session_on_fail" : true
            },
            globals: {
                driver_port: 9515,
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
                elementScrollBehavior: 1,
                chromeOptions: {
//                    args: ['--headless', '--disable-gpu','--no-sandbox' ],
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
                'ie.usePerProcessProxy': true,
                platform: 'WINDOWS',
                javascriptEnabled: true,
                acceptSslCerts: true,
                ensureCleanSession: true
            }
        }
    }
};

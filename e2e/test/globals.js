const HtmlReporter = require('nightwatch-html-reporter-thapovan');
const mkdirp = require('mkdirp');
const fs = require('fs');
const chai = require('chai');
const dirtyChai = require('dirty-chai');
const chromedriver = require('chromedriver');
const geckodriver = require('geckodriver');

chai.use(dirtyChai);

global.expect = chai.expect;

const reporter = new HtmlReporter({
    openBrowser: false,
    reportsDirectory: 'output/reports',
    reportFilename: 'index.html',
    themeName: 'compact',
    relativeScreenshots: true
});

module.exports = {
    // abortOnAssertionFailure: true,
    // waitForConditionPollInterval: 100,
    // waitForConditionTimeout: 10000,
    // throwOnMultipleElementsReturned: true,
    // asyncHookTimeout: 10000,

    saveScreenAndHTML(browser, name) {
        const { browserName } = browser.options.desiredCapabilities;

        const cwd = process.cwd();
        mkdirp.sync(`${cwd}/output/html/${browserName}`);

        const parts = name.split('/');
        if (parts && parts.length > 1) {
            mkdirp.sync(`${cwd}/output/html/${browserName}/${parts[0]}`);
        }

        browser.saveScreenshot(`${cwd}/output/screenshots/${browserName}/${name}.png`);
        browser.source(result => fs.writeFileSync(`${cwd}/output/html/${browserName}/${name}.html`, result.value));
    },

    default: {
        browser: "chrome",
        myGlobal() {
            return 'I\'m a method';
        }
    },

    chrome: {
        browser: "chrome",
    },

    firefox: {
        browser: "firefox",
    },

    ie: {
        browser: "ie",
    },

    test_env: {
        myGlobal: 'test_global',
        beforeEach() {

        }
    },

    before(cb) {
        if(this.browser === 'chrome') {
            console.error(this.driver_port);
            chromedriver.start([`--port=${this.driver_port}`,`--log-level=SEVERE`]);
        } else if (this.browser === 'firefox') {
            geckodriver.start(['--port',this.driver_port, '--log', 'error']);
        }
        cb();
    },

    beforeEach(browser, cb) {
        browser.timeouts('page load', 20000, cb);
    },

    afterEach(browser, cb) {
        cb();
    },

    after(cb) {
        if(this.browser === 'chrome') {
            chromedriver.stop();
        } else if (this.browser === 'firefox') {
            geckodriver.stop();
        }
        cb();
    },

    reporter(results, cb) {
        reporter.fn(results, cb);
    },

    QAenv : {
        adm_delaytime: 7000,
        adm_login_delaytime: 7000,
        adm_loginpwd:'Qawsed53',
        adm_newpwd:'Admin123',
        adm_emailid:'ssivaramakrishnan@thapovan-inc.com',
        adm_fwdemailid:'sriramkmpt@gmail.com',
        adm_edittxt:'Test file',
        adm_edittxtdes:'edited the file for test',
        adm_deltxtnote:'delele device',
        dynamic_url: 'False',
        UserOTP:234567,
        Usersearchtext:'test',
        searchtxt: 'admin',
        FMsrctxt:'test',
        FMsrctxttitle:'userfile',
        usr_delaytime: 10000,
        usr_loginpwd:'Qawsed53',
        usr_newpwd:'Admin001',
        adm_devname:'PHONE',
        adm_devbrnd:'IPHONE',
        adm_devmodel:'IPHONE9X',
        adm_regdate:'2018-04-18',
        adm_desnote:'New device',
        adm_Editdevname:'PHONE-IPHONE',
        adm_Editdevbrnd:'IPHONE Device',
        adm_Editdevmodel:'IPHONE9X',
        adm_Editregdate:'2018-04-23',
        adm_Editdesnote:'Edited device',
    //    usr_loginpwd:'Admin001',
    //    usr_newpwd:'Qawsed53',
        usr_emailid:'testuser@thapovan-inc.com',
        Actual_url: 'http://enssa-enssa-web-staging.review-apps.sspmvp.com',
        adm_EditUserFname:'Sample',
        adm_EditUserMname:'Test',
        adm_EditUserLname:'Thapovan',
        adm_EditUserEmail:'TestatThapovan@gmail.com',
        adm_EditUserMobile: '+919765437896',
        adm_EditUserCity: 'LosAngles',
        adm_EditUserState: 'California',
        adm_EditUserZip: '50001',
        adm_EditStreet:'Grant st'

        }
 };


//module.exports = {
//QAenv : {
//
//    adm_delaytime: 6000,
//    adm_login_delaytime: 7000,
//    adm_loginpwd:'Qawsed53',
//    adm_loginpwdMani:'Qawsed53',
//    adm_newpwd:'Admin001',
//    adm_emailid:'varumugam@thapovan-inc.com',
//    adm_edittxt:'Test file',
//    adm_edittxtdes:'edited the file for test',
//    adm_deltxtnote:'delele device',
//    dynamic_url: 'False',
//    UserOTP:234567,
//    Usersearchtext:'test',
//    searchtxt: 'admin',
//    FMsrctxt:'test',
//    FMsrctxttitle:'userfile',
//    usr_delaytime: 5000,
//    usr_loginpwd:'Qawsed53',
//    usr_newpwd:'Admin001',
//    adm_devname:'PHONE',
//    adm_devbrnd:'IPHONE',
//    adm_devmodel:'IPHONE9X',
//    adm_regdate:'2018-04-18',
//    adm_desnote:'New device',
//    adm_Editdevname:'PHONE-IPHONE',
//    adm_Editdevbrnd:'IPHONE Device',
//    adm_Editdevmodel:'IPHONE9X',
//    adm_Editregdate:'2018-04-23',
//    adm_Editdesnote:'Edited device',
//
//
////    usr_loginpwd:'Admin001',
////    usr_newpwd:'Qawsed53',
//    usr_emailid:'testuser@thapovan-inc.com',
//    Actual_url: 'http://enssa-enssa-web-mvp-11.review-apps.tepay.ae',
    //}
//};

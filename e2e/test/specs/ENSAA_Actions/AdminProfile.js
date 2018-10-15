const path = require('path');
const url_ref = require('../../config.js');
module.exports = {
//Positive Scenarios
//Admin login with valid user Name and Password
'ENSSA Admin - Positive Scenarios-Login With Valid credentials' : function(browser) {
       browser.deleteCookies(function(){});
       browser.maximizeWindow();
       browser.refresh();
       browser.pause(browser.globals.QAenv.adm_delaytime)
       browser.refresh();
       const Loginadminvc = browser.page.LoginENSSA();
       Loginadminvc.navigate()
       .pause(browser.globals.QAenv.adm_delaytime)
       .verify.visible('@UserName')
       .verify.visible('@PassWord')
       .verify.visible('@SubmitLogin')
       .verify.visible('@ForgotPassword')
       .setValue('@UserName' , browser.globals.QAenv.adm_emailid)
       .setValue('@PassWord' , browser.globals.QAenv.adm_loginpwd)
       .verify.visible('@ForgotPassword','Admin login page loaded sucessfully')
       .saveScreenshot('./output/screenshots/Admin login page loaded sucessfully.png')
       .pause(30000)
       .click('@SubmitLogin')
       .pause(browser.globals.QAenv.adm_delaytime);
       },
//// ENSSA Admin - Profile page
'ENSSA Admin - Profile page - Enter Search text for filter- refresh - download file' : function(browser) {
         const adminprofilecp = browser.page.AdminprofileENSSA();
                console.log(browser.globals.QAenv.adm_delaytime);
                adminprofilecp
//               .waitForElementVisible('@SearchQueryTextbox', browser.globals.QAenv.adm_delaytime, false, () => {}, 'txtbox is present')
//               .pause(browser.globals.QAenv.adm_delaytime)
//               .setValue('@SearchQueryTextbox', browser.globals.QAenv.searchtxt)
//               .waitForElementVisible('@SearchdiscountFilter', browser.globals.QAenv.adm_delaytime, false, () => {}, 'filter is present')
//               .click('@SearchdiscountFilter')
//               .saveScreenshot('./output/screenshots/srchfilter.png')
//               .pause(browser.globals.QAenv.adm_delaytime)
//               .click('@RefreshbuttonFilter')
//               .pause(browser.globals.QAenv.adm_delaytime)
//               .saveScreenshot('./output/screenshots/refrshfilter.png')
//               .click('@FileDownloadTemplate')
//               .pause(browser.globals.QAenv.adm_delaytime)
//               .saveScreenshot('./output/screenshots/dwntemp.png')
//                .click('@FileDownloadSample')
//                .pause(browser.globals.QAenv.adm_delaytime)
//                .saveScreenshot('./output/screenshots/downsamp.png')
//               .click('@FileUploadbutton')
//                .saveScreenshot('./output/screenshots/b4uploadfile.png')
//               .pause(browser.globals.QAenv.adm_delaytime)
//               //.uploadLocalFile(require('path').resolve('e2e/test/enssa-users-list-sample.xlsx'),'#lnkBrowse');
//               .setValue('#lnkBrowse', require('path').resolve('e2e/test/enssa-testuser-latest.xlsx'));
//               adminprofilecp
//               .pause(browser.globals.QAenv.adm_delaytime)
//               .saveScreenshot('./output/screenshots/uploadfileselection.png')
//               .click('#btnUpload')
//               .pause(browser.globals.QAenv.adm_delaytime)
//               .click('#btnClsSuccessMsg')
//               .saveScreenshot('./output/screenshots/fileuploadedsucess.png')
//               .pause(browser.globals.QAenv.adm_delaytime);
               adminprofilecp
               .click('@FileUploadbutton')
               .saveScreenshot('./output/screenshots/b4uploadtemplate.png')
              .pause(browser.globals.QAenv.adm_delaytime)
              //.uploadLocalFile(require('path').resolve('e2e/test/enssa-users-list-sample-updated.xlsx'),'#lnkBrowse');
               .setValue('#lnkBrowse', require('path').resolve('e2e/test/enssa-testuser-latest -updated.xlsx'));
              adminprofilecp
              .pause(browser.globals.QAenv.adm_delaytime)
              .saveScreenshot('./output/screenshots/uploadfiletemplate.png')
               .click('#btnUpload')
               .pause(browser.globals.QAenv.adm_delaytime)
               .saveScreenshot('./output/screenshots/b4sendmil.png')
               .click('@SendEmailClick')
//               .pause(browser.globals.QAenv.adm_delaytime)
//               .waitForElementVisible('#messageModel .bootbox-close-button.close',browser.globals.QAenv.adm_delaytime,false,()=>{},'Sent email ')
//               .click('#messageModel .bootbox-close-button.close')
//               .waitForElementVisible('@SearchQueryTextbox',browser.globals.QAenv.adm_delaytime,false,()=>{},'Search refresh download success')
//               .saveScreenshot('./output/screenshots/Search refresh download success.png');
//               console.log(" sent mail msg popup completed")
                .click('@ExportRejecteData')
       },

'ENSSA Admin - Profile page - View profile' : function(browser) {
        const adminprofilepagevp = browser.page.AdminprofileENSSA();
        console.log (`${process.env.REVIEW_APP_URL}||${url_ref.QAenv.Actual_url}`)
        adminprofilepagevp
        .pause(browser.globals.QAenv.adm_delaytime)
       .click('@ProfileIconclick')
       .pause(browser.globals.QAenv.adm_delaytime)
       .click('@ViewProfile')
       .pause(browser.globals.QAenv.adm_delaytime)
       .waitForElementVisible('@ProfileIconclick',10000,false,()=>{},'Admin profile page loaded sucessfully')
       .saveScreenshot('./output/screenshots/Admin profile page loaded sucessfully.png')
      }

};
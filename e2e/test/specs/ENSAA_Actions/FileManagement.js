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
       .pause(browser.globals.QAenv.adm_delaytime)
       .click('@SubmitLogin')
       .pause(browser.globals.QAenv.adm_delaytime)

       },
   //// ENSSA Admin - OTP page
   'ENSSA Admin - OTP page - Enter OTP' : function(browser) {
            const otpkey = browser.page.OTPScreen();
            console.log(browser.globals.QAenv.adm_delaytime)
            otpkey
            .pause(browser.globals.QAenv.adm_delaytime)
            .verify.visible('@UserOTP')
            .verify.visible('@CancelOTP')
            .verify.visible('@ResendOTP')
            .verify.visible('@SubmitOTP')
            .pause(browser.globals.QAenv.adm_delaytime)
            .setValue('@UserOTP' , browser.globals.QAenv.UserOTP)
             .verify.visible('@UserOTP','OTP page loaded sucessfully')
             .saveScreenshot('./output/screenshots/OTP page loaded sucessfully.png')
            .pause(browser.globals.QAenv.adm_delaytime)
            .click('@SubmitOTP')

            },
'ENSSA Admin - File Management page ' : function(browser) {

                const adminprofilecp1 = browser.page.AdminprofileENSSA();
                adminprofilecp1
                .pause(browser.globals.QAenv.adm_delaytime)
                .verify.visible('@DashBoardMenu')
                .click('@DashBoardMenu');
                adminprofilecp1
                .pause(browser.globals.QAenv.adm_delaytime)
                 .verify.visible('@ManageFile')
                .click('@ManageFile');
         const Mfilecp = browser.page.FileManagement();
                 Mfilecp
                .pause(browser.globals.QAenv.adm_delaytime)
                .verify.visible('@SearchText')
                .setValue('@SearchText' , browser.globals.QAenv.FMsrctxt)
                .click('@SearchIcon');
                Mfilecp
                .pause(browser.globals.QAenv.adm_delaytime)
                .verify.visible('@Refresh')
                .click('@Refresh');
                Mfilecp
                .pause(browser.globals.QAenv.adm_delaytime)
                 .verify.visible('@OperationStatus')
                .click('@OperationStatus')
                .click('@OptionSelection');
                Mfilecp
                .pause(browser.globals.QAenv.adm_delaytime)
                 .verify.visible('@LeftMenu1')
                .click('@LeftMenu1');
                Mfilecp
                .pause(browser.globals.QAenv.adm_delaytime)
                .verify.visible('@LeftMenu2')
                .click('@LeftMenu2');
                Mfilecp
                .pause(browser.globals.QAenv.adm_delaytime)
                .verify.visible('@LeftMenu3')
                .click('@LeftMenu3');
                Mfilecp
                .pause(browser.globals.QAenv.adm_delaytime)
                .click('@LeftMenu4');
                Mfilecp
                .pause(browser.globals.QAenv.adm_delaytime)
                .verify.visible('@LeftMenu3')
                .click('@LeftMenu3');
                Mfilecp
                .pause(browser.globals.QAenv.adm_delaytime)
                .verify.visible('@AddDoc')
                .click('@AddDoc');
                Mfilecp
               .pause(browser.globals.QAenv.adm_delaytime)
               .verify.visible('@Title')
               .setValue('@Title' , browser.globals.QAenv.FMsrctxttitle)
                .pause(browser.globals.QAenv.adm_delaytime)
                .verify.visible('@Description')
               .setValue('@Description' , browser.globals.QAenv.FMsrctxttitle)
                //.click('#lnkBrowse')
                 .pause(browser.globals.QAenv.adm_delaytime)
                //.uploadLocalFile(require('path').resolve('e2e/test/enssa-testuser-latest.xlsx'),'#lnkBrowse');
                .setValue('#lnkBrowse', require('path').resolve('e2e/test/enssa-testuser-latest.xlsx'))
                 .verify.visible('@AddFile')
                .click('@AddFile')
                .pause(browser.globals.QAenv.adm_delaytime)
                .verify.visible('@Closepopup')
                .pause(browser.globals.QAenv.adm_delaytime)
                .click('@Closepopup')
                .pause(browser.globals.QAenv.adm_delaytime);

         browser.waitForElementVisible('#tab1C > table > tbody > tr:nth-child(1)', 25000, function () {
                // User try to mousehover on the particular element
              browser.moveToElement('#tab1C > table > tbody > tr:nth-child(1)', 100, 100, function() {
              browser.waitForElementVisible('#lnkDownloadFile3', 25000, function () {
              browser.pause(browser.globals.QAenv.adm_delaytime)
              browser.click('#lnkDownloadFile3')
              browser.pause(browser.globals.QAenv.adm_delaytime)
              },);
              });
              });
         browser.waitForElementVisible('#tab1C > table > tbody > tr:nth-child(1)', 25000, function () {
                // User try to mousehover on the particular element
               browser.moveToElement('#tab1C > table > tbody > tr:nth-child(1)', 100, 100, function() {
                browser.waitForElementVisible('#lnkDownloadFile3', 25000, function () {
                const Mfilecp = browser.page.FileManagement();
                  Mfilecp
                   .pause(browser.globals.QAenv.adm_delaytime)
                   .click('#lnkEditFile3')
                   .pause(browser.globals.QAenv.adm_delaytime)
                   .verify.visible('@EditTitle')
                   .verify.visible('@EditDescription')
                    .clearValue('@EditTitle')
                    .clearValue('@EditDescription')
                  .setValue('@EditTitle' , browser.globals.QAenv.adm_edittxt)
                  .setValue('@EditDescription' , browser.globals.QAenv.adm_edittxtdes)
                  .pause(browser.globals.QAenv.adm_delaytime)
                  .click('@EditSave')
                  .pause(browser.globals.QAenv.adm_delaytime)
                  .click('@Closepopup');
                },);
                });
                });
        browser.waitForElementVisible('#tab1C > table > tbody > tr:nth-child(1)', 25000, function () {
                // User try to mousehover on the particular element
               browser.moveToElement('#tab1C > table > tbody > tr:nth-child(1)', 100, 100, function() {
                browser.waitForElementVisible('#lnkDownloadFile3', 25000, function () {
                  browser.pause(browser.globals.QAenv.adm_delaytime)
                  .verify.visible('#lnkDeleteFile3')
                  browser.click('#lnkDeleteFile3')
                  browser.pause(browser.globals.QAenv.adm_delaytime)
                  browser.click('#btnDelConfirmNo')
                  },);
                });
                });
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
        .click('@ProfileIconclick')
        .pause(browser.globals.QAenv.adm_delaytime)
        .click('@ChangePassword')
        .pause(browser.globals.QAenv.adm_delaytime)
     },

 //// Changing the password
 'ENSSA Admin -  Change Password ' : function(browser) {
         const admchangepwd = browser.page.AdminChangepwd();
          console.log (`${process.env.REVIEW_APP_URL}||${url_ref.QAenv.Actual_url}`)
         admchangepwd
          .pause(browser.globals.QAenv.adm_delaytime)
          .verify.visible('@Oldpwd')
          .verify.visible('@Newpwd')
          .verify.visible('@ConfirmPwd')
          .setValue('@Oldpwd' , browser.globals.QAenv.adm_loginpwd)
          .setValue('@Newpwd' , browser.globals.QAenv.adm_newpwd)
          .setValue('@ConfirmPwd' , browser.globals.QAenv.adm_newpwd)
          .verify.visible('@ConfirmPwd','Admin Change password screen loaded sucessfully')
          .saveScreenshot('./output/screenshots/Admin Change password screen loaded sucessfully.png')
          .click('@SubmitbtnSubmit')
          .pause(browser.globals.QAenv.adm_delaytime)
          .click('@Closechangepwd')
          .pause(browser.globals.QAenv.adm_delaytime)
           },
 'ENSSA Admin - Login - With changed password credentials' : function(browser) {
            const admLoginnp = browser.page.LoginENSSA();
             console.log (`${process.env.REVIEW_APP_URL}||${url_ref.QAenv.Actual_url}`)
            admLoginnp
            .pause(browser.globals.QAenv.adm_delaytime)
            .verify.visible('@ForgotPassword')
            .setValue('@UserName' , browser.globals.QAenv.adm_emailid)
            .setValue('@PassWord' , browser.globals.QAenv.adm_newpwd)
            .verify.visible('@ForgotPassword','Admin CP login page loaded sucessfully')
            .saveScreenshot('./output/screenshots/Admin CP login page loaded sucessfully.png')
            .pause(browser.globals.QAenv.adm_delaytime)
            .click('@SubmitLogin')
            },
 'ENSSA Admin - Profile page - Logout ' : function(browser) {
              const adminprofilepagecdp = browser.page.AdminprofileENSSA();
               console.log (`${process.env.REVIEW_APP_URL}||${url_ref.QAenv.Actual_url}`)
              adminprofilepagecdp
              .pause(browser.globals.QAenv.adm_delaytime)
             .waitForElementVisible('@ProfileIconclick',10000,false,()=>{},'Admin profile page logout success')
             .saveScreenshot('./output/screenshots/Admin profile page logout success.png')
             .click('@ProfileIconclick')
             .pause(browser.globals.QAenv.adm_delaytime)
             .click('@LogOut')
             .pause(browser.globals.QAenv.adm_delaytime)
          },
// 'ENSSA - Admin - Login to Restore password credentials' : function(browser) {
//            const admLoginnp1 = browser.page.LoginENSSA();
//             console.log (`${process.env.REVIEW_APP_URL}||${url_ref.QAenv.Actual_url}`)
//            admLoginnp1
//            .pause(browser.globals.QAenv.adm_delaytime)
//            .verify.visible('@ForgotPassword')
//            .setValue('@UserName' , browser.globals.QAenv.adm_emailid)
//            .setValue('@PassWord' , browser.globals.QAenv.adm_newpwd)
//            .verify.visible('@ForgotPassword','login page loaded sucessfully')
//            .saveScreenshot('./output/screenshots/Login page loaded sucessfully.png')
//            .pause(browser.globals.QAenv.adm_delaytime)
//            .click('@SubmitLogin')
//            },
//
// //// Profile page
// 'ENSSA - Admin Profile page-CP' : function(browser) {
//               const admprofilepagecp1 = browser.page.AdminENSSAprofilepage();
//                console.log (`${process.env.REVIEW_APP_URL}||${url_ref.QAenv.Actual_url}`)
//               admprofilepagecp1
//              .waitForElementVisible('@ProfileIconclick',10000,false,()=>{},'AdminCP profile page loaded sucessfully')
//              .saveScreenshot('./output/screenshots/AdminCP profile page loaded sucessfully.png')
//              .pause(browser.globals.QAenv.adm_delaytime)
//              .click('@ProfileIconclick')
//              .pause(browser.globals.QAenv.adm_delaytime)
//              .click('@ChangePassword')
//              .pause(browser.globals.QAenv.adm_delaytime)
//           },
// //// Changing the password
// 'ENSSA - Admin - Change Password - To Original  ' : function(browser) {
//               const admchangepwdcp1 = browser.page.AdminChangepwd();
//                console.log (`${process.env.REVIEW_APP_URL}||${url_ref.QAenv.Actual_url}`)
//               admchangepwdcp1
//                .pause(browser.globals.QAenv.adm_delaytime)
//               .verify.visible('@Oldpwd')
//               .verify.visible('@Newpwd')
//               .verify.visible('@ConfirmPwd')
//                .setValue('@Oldpwd' , browser.globals.QAenv.adm_newpwd)
//                .setValue('@Newpwd' , browser.globals.QAenv.adm_loginpwd)
//                .setValue('@ConfirmPwd' , browser.globals.QAenv.adm_loginpwd)
//                .verify.visible('@Oldpwd','Admin Restore Change password screen loaded sucessfully')
//                .saveScreenshot('./output/screenshots/Admin Restore Change password screen loaded sucessfully.png')
//                .click('@SubmitbtnSubmit')
//                .pause(browser.globals.QAenv.adm_delaytime)
//                .click('@Closechangepwd')
//                .end();
//                }

         };

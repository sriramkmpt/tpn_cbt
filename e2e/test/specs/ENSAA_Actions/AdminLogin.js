const path = require('path');
const url_ref = require('../../config.js');
const Excel = require('exceljs');
let workbook = new Excel.Workbook();
const fs = require('fs');
var XLSX = require('xlsx')
const assert = require("chai").assert;
module.exports = {
////////Auth Services Login,Forgot password and Change password//////
'CBTDBT - Admin - Auth Service Tests - Login With Valid credentials' : function(browser) {
       const Loginadminvc = browser.page.LoginCBTDBT();
       Loginadminvc.navigate();
       browser.deleteCookies(function(){});
       browser.maximizeWindow();
       browser.refresh();
       Loginadminvc
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

      // .pause(browser.globals.QAenv.adm_delaytime)

       },

//// LNT Admin - OTP page
'CBTDBT Admin - OTP page - Enter OTP' : function(browser) {

            const otpkey = browser.page.OTPScreen();
            console.log(browser.globals.QAenv.adm_delaytime);
            let userOTP = '111111';
            browser.getValue('#testOTP', function(otp) {
                userOTP = otp.value;
                //console.log(userOTP);
                otpkey
                .pause(browser.globals.QAenv.adm_delaytime)
                .verify.visible('@UserOTP')
                .verify.visible('@CancelOTP')
                .verify.visible('@ResendOTP')
                .verify.visible('@SubmitOTP')
                .pause(browser.globals.QAenv.adm_delaytime)
                .setValue('@UserOTP' ,userOTP )
                 .verify.visible('@UserOTP','OTP page loaded sucessfully')
                 .saveScreenshot('./output/screenshots/OTP page loaded sucessfully.png')
                .pause(browser.globals.QAenv.adm_delaytime)
                .click('@SubmitOTP')
              });
            },
//// ENSSA Admin - Profile page
'CBTDBT - Admin - Profile page - Logout ' : function(browser) {
             const adminprofilepagecdp = browser.page.AdminprofileCBTDBT();
             console.log (`${process.env.REVIEW_APP_URL}||${url_ref.QAenv.Actual_url}`)
             adminprofilepagecdp
            .pause(browser.globals.QAenv.adm_delaytime)
            .waitForElementVisible('@ProfileIconclick',10000,false,()=>{},'Admin profile page logout success')
            .saveScreenshot('./output/screenshots/Admin profile page logout success.png')
            .click('@ProfileIconclick')
            .pause(browser.globals.QAenv.adm_delaytime)
            .click('@LogOut')
            .pause(browser.globals.QAenv.adm_delaytime)
         }

};
const path = require('path');
const url_ref = require('../../config.js');
const Excel = require('exceljs');
let workbook = new Excel.Workbook();
const fs = require('fs');
var XLSX = require('xlsx')
const assert = require("chai").assert;
module.exports = {
////////Auth Services Login,Forgot password and Change password//////
'ENSSA Admin - Auth Service Tests  -Login With Valid credentials' : function(browser) {
       const Loginadminvc = browser.page.LoginENSSA();
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
//// ENSSA Admin - OTP page
'ENSSA Admin - OTP page - Enter OTP' : function(browser) {

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
'ENSSA Admin - Profile page - View profile -Logout' : function(browser) {
         const adminprofilepagevp = browser.page.AdminprofileENSSA();
         console.log (`${process.env.REVIEW_APP_URL}||${url_ref.QAenv.Actual_url}`)
         browser.maximizeWindow();
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
        .click('@LogOut')
        //.click('@ChangePassword')
        .pause(browser.globals.QAenv.adm_delaytime)
        .end()
     },
//
'ENSSA-Forgot password- Login Page - Cancel click - Valid user ' : function(browser) {
             const Loginadminvc = browser.page.LoginENSSA();
             Loginadminvc.navigate();
             Loginadminvc
            .pause(browser.globals.QAenv.adm_delaytime)
             .clearValue('@UserName')
            .setValue('@UserName' , browser.globals.QAenv.adm_emailid)
           .verify.visible('@ForgotPassword')
           .verify.visible('@ForgotPassword','login page loaded sucessfully')
           .saveScreenshot('./output/screenshots/login page loaded sucessfully.png')
           .pause(browser.globals.QAenv.adm_delaytime)
           .click('@ForgotPassword');

},
////Forgot password checks
'ENSSA - Forgot Password-Cancel Button click  ' : function(browser) {
             const Forgotpwdsubmitvc = browser.page.ForgotpwdENSSA();
             Forgotpwdsubmitvc
              .pause(browser.globals.QAenv.adm_delaytime)
              .verify.visible('@EmailID')
              .setValue('@EmailID' , 'Invalidensaauser@gmail.com')
              .pause(browser.globals.QAenv.usr_delaytime)
              .verify.visible('@EmailID','InValid ENSAA User')
              .saveScreenshot('./output/screenshots/InValid ENSAA User.png')
               .pause(browser.globals.QAenv.adm_delaytime)
              .click('@Cancelbtn')
     },
////Forgot Password - Login with valid ENSSA user and verify the email
'ENSSA - Forgot password- Login Page - Submit Valid user ' : function(browser) {
            const Forgotpwdvc = browser.page.LoginENSSA();
            Forgotpwdvc
            .verify.visible('@ForgotPassword')
            .pause(browser.globals.QAenv.adm_delaytime)
            .click('@ForgotPassword');
     },
////
////Forgot password
'ENSSA - Forgot Password-Submit Valid user receives mail  ' : function(browser) {
             const Forgotpwdsubmitvc = browser.page.ForgotpwdENSSA();
             Forgotpwdsubmitvc
              .pause(browser.globals.QAenv.adm_delaytime)
              .verify.visible('@EmailID')
              .setValue('@EmailID' , 'sriramkmpt@gmail.com')
              .pause(browser.globals.QAenv.usr_delaytime)
              .verify.visible('@EmailID','Valid ENSAA User')
              .saveScreenshot('./output/screenshots/Valid ENSAA User.png')
              .click('@Submitbtn')
               .pause(browser.globals.QAenv.adm_delaytime)
              .click('@Popmsgclosebtn');
    },
////
////////Negative Scenarios
////Negative Scenarios-Forgot Password - Check with Invalid ENSSA user
'ENSSA-Forgot password- Check with Invalid ENSSA user ' : function(browser) {
             const Forgotpwdngtviu = browser.page.LoginENSSA();
             Forgotpwdngtviu
             .verify.visible('@ForgotPassword')
             .pause(browser.globals.QAenv.adm_delaytime)
             .click('@ForgotPassword');
    },
'ENSSA - Forgot Password-Submit Button -Invalid User  ' : function(browser) {
              const Forgotpwdngtvchk = browser.page.ForgotpwdENSSA();
              Forgotpwdngtvchk
               .pause(browser.globals.QAenv.adm_delaytime)
               .verify.visible('@Submitbtn')
               .setValue('@EmailID' , 'Invaliduser@gmail.com')
               .pause(browser.globals.QAenv.adm_delaytime)
               .verify.visible('@Submitbtn','Invalid user clicks submit button')
               .saveScreenshot('./output/screenshots/Invalid user clicks submit button.png')
              .click('@Submitbtn')
              .pause(browser.globals.QAenv.adm_delaytime)
               .click('@Popmsgclosebtn');
     },
'ENSSA - Change Password-Process-valid User  ' : function(browser) {
       const Loginadminvc = browser.page.LoginENSSA();
       Loginadminvc.navigate();
       browser.deleteCookies(function(){});
       browser.maximizeWindow();
       browser.refresh();
       const chngpwdvu = browser.page.LoginENSSA();
       chngpwdvu
       .verify.visible('@ForgotPassword')
       .setValue('@UserName' , browser.globals.QAenv.adm_emailid)
       .setValue('@PassWord' , browser.globals.QAenv.adm_loginpwd)
       .verify.visible('@ForgotPassword','Admin login page loaded sucessfully')
       .saveScreenshot('./output/screenshots/Admin login page loaded sucessfully.png')
       .pause(browser.globals.QAenv.adm_delaytime)
       .click('@SubmitLogin')
       .pause(browser.globals.QAenv.adm_delaytime)
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
                       .click('@SubmitOTP')
                        .saveScreenshot('./output/screenshots/OTP page loaded sucessfully.png')
                       .pause(browser.globals.QAenv.adm_delaytime)

                        });
                },
//
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
          const adminprofilepagecp = browser.page.AdminprofileENSSA();
          adminprofilepagecp
          .pause(browser.globals.QAenv.adm_delaytime)
         .click('@ProfileIconclick')
         .pause(browser.globals.QAenv.adm_delaytime)
         .click('@ChangePassword')
         .pause(browser.globals.QAenv.adm_delaytime)
      },
////
////  //// Changing the password
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
           .click('@Closechangepwderrmsg')
           .pause(browser.globals.QAenv.adm_delaytime)
            .click('@CloseButton')
            //browser.closeWindow();
            },
 'ENSSA Admin - Login - With changed password credentials' : function(browser) {
      const Loginadminvc = browser.page.LoginENSSA();
       Loginadminvc.navigate();
       browser.deleteCookies(function(){});
       browser.maximizeWindow();
       browser.refresh();
       const chngpwdvu = browser.page.LoginENSSA();
       chngpwdvu
       .verify.visible('@ForgotPassword')
       .setValue('@UserName' , browser.globals.QAenv.adm_emailid)
       .setValue('@PassWord' , browser.globals.QAenv.adm_newpwd)
       .verify.visible('@ForgotPassword','Admin login page loaded sucessfully')
       .saveScreenshot('./output/screenshots/Admin login page loaded sucessfully.png')
       .pause(browser.globals.QAenv.adm_delaytime)
       .click('@SubmitLogin')
       .pause(browser.globals.QAenv.adm_delaytime)
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
                       .click('@SubmitOTP')
                        .saveScreenshot('./output/screenshots/OTP page loaded sucessfully.png')
                       .pause(browser.globals.QAenv.adm_delaytime)

                        });
                },
//
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
//
 'ENSSA - Admin - Login to Restore password credentials' : function(browser) {
      const Loginadminvc = browser.page.LoginENSSA();
       Loginadminvc.navigate();
       browser.deleteCookies(function(){});
       browser.maximizeWindow();
       browser.refresh();
       const chngpwdvu = browser.page.LoginENSSA();
       chngpwdvu
       .verify.visible('@ForgotPassword')
       .setValue('@UserName' , browser.globals.QAenv.adm_emailid)
       .setValue('@PassWord' , browser.globals.QAenv.adm_newpwd)
       .verify.visible('@ForgotPassword','Admin login page loaded sucessfully')
       .saveScreenshot('./output/screenshots/Admin login page loaded sucessfully.png')
       .pause(browser.globals.QAenv.adm_delaytime)
       .click('@SubmitLogin')
       .pause(browser.globals.QAenv.adm_delaytime)
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
                       .click('@SubmitOTP')
                        .saveScreenshot('./output/screenshots/OTP page loaded sucessfully.png')
                       .pause(browser.globals.QAenv.adm_delaytime)

                        });
                },
//
//  //// Profile page
  'ENSSA - Admin Profile page-CP' : function(browser) {
                const admprofilepagecp1 = browser.page.AdminENSSAprofilepage();
                 console.log (`${process.env.REVIEW_APP_URL}||${url_ref.QAenv.Actual_url}`)
                admprofilepagecp1
               .waitForElementVisible('@ProfileIconclick',10000,false,()=>{},'AdminCP profile page loaded sucessfully')
               .saveScreenshot('./output/screenshots/AdminCP profile page loaded sucessfully.png')
               .pause(browser.globals.QAenv.adm_delaytime)
               .click('@ProfileIconclick')
               .pause(browser.globals.QAenv.adm_delaytime)
               .click('@ChangePassword')
               .pause(browser.globals.QAenv.adm_delaytime)
            },
  //// Changing the password
  'ENSSA - Admin - Change Password - To Original  ' : function(browser) {
                const admchangepwdcp1 = browser.page.AdminChangepwd();
                 console.log (`${process.env.REVIEW_APP_URL}||${url_ref.QAenv.Actual_url}`)
                admchangepwdcp1
                 .pause(browser.globals.QAenv.adm_delaytime)
                .verify.visible('@Oldpwd')
                .verify.visible('@Newpwd')
                .verify.visible('@ConfirmPwd')
                 .setValue('@Oldpwd' , browser.globals.QAenv.adm_newpwd)
                 .setValue('@Newpwd' , browser.globals.QAenv.adm_loginpwd)
                 .setValue('@ConfirmPwd' , browser.globals.QAenv.adm_loginpwd)
                 .verify.visible('@Oldpwd','Admin Restore Change password screen loaded sucessfully')
                 .saveScreenshot('./output/screenshots/Admin Restore Change password screen loaded sucessfully.png')
               .click('@SubmitbtnSubmit')
               .pause(browser.globals.QAenv.adm_delaytime)
               .click('@Closechangepwderrmsg')
               .pause(browser.globals.QAenv.adm_delaytime)
                .click('@CloseButton')
                .pause(browser.globals.QAenv.adm_delaytime)
                browser.end();
    },


/////File Management/////

'ENSSA Admin -File Management-Login With Valid credentials' : function(browser) {
       const Loginadminvc = browser.page.LoginENSSA();
       Loginadminvc.navigate();
       browser.deleteCookies(function(){});
       browser.maximizeWindow();
       browser.refresh();
       const chngpwdvu = browser.page.LoginENSSA();
       chngpwdvu
       .verify.visible('@ForgotPassword')
       .setValue('@UserName' , browser.globals.QAenv.adm_emailid)
       .setValue('@PassWord' , browser.globals.QAenv.adm_loginpwd)
       .verify.visible('@ForgotPassword','FM Admin login page loaded sucessfully')
       .saveScreenshot('./output/screenshots/FM Admin login page loaded sucessfully.png')
       .pause(browser.globals.QAenv.adm_delaytime)
       .click('@SubmitLogin')
       .pause(browser.globals.QAenv.adm_delaytime)
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
                       .click('@SubmitOTP')
                        .saveScreenshot('./output/screenshots/FM OTP page loaded sucessfully.png')
                       .pause(browser.globals.QAenv.adm_delaytime)

                        });
      },
'ENSSA Admin - File Management - Folder Selections ' : function(browser) {

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
                .click('@LeftMenu3')
                .pause(browser.globals.QAenv.adm_delaytime)
                .saveScreenshot('./output/screenshots/FM page loaded sucessfully.png')
         },

'ENSSA Admin - File Management - Add Document  ' : function(browser) {
                const adminprofilecp1 = browser.page.AdminprofileENSSA();
                adminprofilecp1
                const Mfilecp = browser.page.FileManagement();
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
                .uploadLocalFile(require('path').resolve('e2e/test/Enssacurrentuserlist.xlsx'),'#lnkBrowse');
                //.setValue('#lnkBrowse', require('path').resolve('e2e/test/Enssacurrentuserlist.xlsx'))
                Mfilecp
                 .verify.visible('@AddFile')
                .pause(browser.globals.QAenv.adm_delaytime)
                .saveScreenshot('./output/screenshots/FM Add Doc page loaded sucessfully.png')
                 .pause(browser.globals.QAenv.adm_delaytime)
                .click('@AddFile')
                .pause(browser.globals.QAenv.adm_delaytime)
                .verify.visible('@Closepopup')
                .pause(browser.globals.QAenv.adm_delaytime)
                .click('@Closepopup')
                .pause(browser.globals.QAenv.adm_delaytime);
},
//
'ENSSA Admin - File Management - Mouse over - Download - Edit- Delete-Excel handle  ' : function(browser) {
                const adminprofilecp1 = browser.page.AdminprofileENSSA();
                adminprofilecp1
                const Mfilecp = browser.page.FileManagement()
                .end();


},

//'ENSSA Admin - File Management - Mouse over - Download - Edit- Delete  ' : function(browser) {
//
//                const adminprofilecp1 = browser.page.AdminprofileENSSA();
//                adminprofilecp1
//                const Mfilecp = browser.page.FileManagement();
//                Mfilecp
//                .pause(browser.globals.QAenv.adm_delaytime)
//            browser.waitForElementVisible('#DataTables_Table_4 > tbody > tr:nth-child(1)', 25000, function () {
//                // User try to mousehover on the particular element
//              browser.moveToElement('#DataTables_Table_4 > tbody > tr:nth-child(1)', 100, 100, function() {
//              browser.waitForElementVisible('#lnkDownloadFile3', 25000, function () {
//              browser.pause(browser.globals.QAenv.adm_delaytime)
//              browser.click('#lnkDownloadFile3')
//              browser.pause(browser.globals.QAenv.adm_delaytime)
//              },);
//              });
//              });
//         browser.waitForElementVisible('#DataTables_Table_4 > tbody > tr:nth-child(1)', 25000, function () {
//                // User try to mousehover on the particular element
//               browser.moveToElement('#DataTables_Table_4 > tbody > tr:nth-child(1)', 100, 100, function() {
//                browser.waitForElementVisible('#lnkDownloadFile3', 25000, function () {
//                const Mfilecp = browser.page.FileManagement();
//                  Mfilecp
//                   .pause(browser.globals.QAenv.adm_delaytime)
//                   .click('#lnkEditFile3')
//                   .pause(browser.globals.QAenv.adm_delaytime)
//                   .verify.visible('@EditTitle')
//                   .verify.visible('@EditDescription')
//                    .clearValue('@EditTitle')
//                    .clearValue('@EditDescription')
//                  .setValue('@EditTitle' , browser.globals.QAenv.adm_edittxt)
//                  .setValue('@EditDescription' , browser.globals.QAenv.adm_edittxtdes)
//                  .pause(browser.globals.QAenv.adm_delaytime)
//                  .click('@EditSave')
//                  .pause(browser.globals.QAenv.adm_delaytime)
//                  .click('@Closepopup');
//                },);
//                });
//                });
//
//        browser.waitForElementVisible('#DataTables_Table_4 > tbody > tr:nth-child(1)', 25000, function () {
//                // User try to mousehover on the particular element
//               browser.moveToElement('#DataTables_Table_4 > tbody > tr:nth-child(1)', 100, 100, function() {
//                browser.waitForElementVisible('#lnkDownloadFile5', 25000, function () {
//                  browser.pause(browser.globals.QAenv.adm_delaytime)
//                  .verify.visible('#lnkEditFile3')
//                  browser.click('#lnkEditFile3')
//                  browser.pause(browser.globals.QAenv.adm_delaytime)
//                  browser.click('#btnDelConfirmNo')
//
//                  },);
//                });
//                });
//
//            },
//

///////Device Management/////////////////

'ENSSA Admin - Device Management-Login With Valid credentials' : function(browser) {
       const Loginadminvc = browser.page.LoginENSSA();
       Loginadminvc.navigate();
       browser.deleteCookies(function(){});
       browser.maximizeWindow();
       browser.refresh();
       const chngpwdvu = browser.page.LoginENSSA();
       chngpwdvu
       .verify.visible('@ForgotPassword')
       .setValue('@UserName' , browser.globals.QAenv.adm_emailid)
       .setValue('@PassWord' , browser.globals.QAenv.adm_loginpwd)
       .verify.visible('@ForgotPassword','DM Admin login page loaded sucessfully')
       .saveScreenshot('./output/screenshots/DM Admin login page loaded sucessfully.png')
       .pause(browser.globals.QAenv.adm_delaytime)
       .click('@SubmitLogin')
       .pause(browser.globals.QAenv.adm_delaytime)
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
                       .click('@SubmitOTP')
                       .saveScreenshot('./output/screenshots/DM OTP page loaded sucessfully.png')
                       .pause(browser.globals.QAenv.adm_delaytime)

                        });
      },

'ENSSA Admin - Device Management -Upload-Download' : function(browser) {

         const adminprofilecp1 = browser.page.AdminprofileENSSA();
                adminprofilecp1
                .pause(browser.globals.QAenv.adm_delaytime)
                .verify.visible('@DashBoardMenu')
                .click('@DashBoardMenu');
                adminprofilecp1
                .pause(browser.globals.QAenv.adm_delaytime)
                 .verify.visible('@ManageDevice')
                .click('@ManageDevice')
                .pause(browser.globals.QAenv.adm_delaytime);
         const MDevice = browser.page.DeviceManagement();
                 MDevice
                .pause(browser.globals.QAenv.adm_delaytime)
                .verify.visible('@SearchText')
                .setValue('@SearchText' , browser.globals.QAenv.FMsrctxt)
                .pause(browser.globals.QAenv.adm_delaytime)
                .click('@DevSearchIcon');
                MDevice
                .pause(browser.globals.QAenv.adm_delaytime)
                .verify.visible('@DevRefresh')
                .click('@DevRefresh');
                 MDevice
                .pause(browser.globals.QAenv.adm_delaytime)
                .saveScreenshot('./output/screenshots/rejectedentries.png')
                .verify.visible('@FileDownloadSample')
                .click('@FileDownloadSample');
                 MDevice
                .pause(browser.globals.QAenv.adm_delaytime)
                .saveScreenshot('./output/screenshots/dwnsamptemp.png')
                .verify.visible('@FileDownloadTemplate')
                .click('@FileDownloadTemplate');
                 MDevice
                 .pause(browser.globals.QAenv.adm_delaytime)
                 .saveScreenshot('./output/screenshots/downsamp.png')
                 .verify.visible('@FileUploadbutton')
                .click('@FileUploadbutton')
                 .saveScreenshot('./output/screenshots/b4uploadfile.png')
                .pause(browser.globals.QAenv.adm_delaytime)
                //.uploadLocalFile(require('path').resolve('e2e/test/Device_Import_Template.xlsx'),'#lnkBrowse');
                .uploadLocalFile(require('path').resolve('e2e/test/device_import-working.xlsx'),'#lnkBrowse');
                //.setValue('#lnkBrowse', require('path').resolve('e2e/test/Device_Import_Template.xlsx'));
                MDevice
               .pause(browser.globals.QAenv.adm_delaytime)
               .verify.visible('#btnUpload')
               .pause(browser.globals.QAenv.adm_delaytime)
               .saveScreenshot('./output/screenshots/uploadDeviceemplate1.png')
               .click('#btnUpload')
               .pause(browser.globals.QAenv.adm_delaytime)
               .saveScreenshot('./output/screenshots/Deviceupload1.png')
               .pause(browser.globals.QAenv.adm_delaytime)
               .verify.visible('@DevExportRejectedData')
               .click('@DevExportRejectedData')
               .pause(browser.globals.QAenv.adm_delaytime)
               .click('@BtnClose')
               .pause(browser.globals.QAenv.adm_delaytime);
               MDevice
               .click('@FileUploadbutton')
               .saveScreenshot('./output/screenshots/b4uploadfile2.png')
               .pause(browser.globals.QAenv.adm_delaytime)
               .uploadLocalFile(require('path').resolve('e2e/test/device_import-working.xlsx'),'#lnkBrowse');
               //.setValue('#lnkBrowse', require('path').resolve('e2e/test/Device_Import_Template.xlsx'));
               MDevice
               .pause(browser.globals.QAenv.adm_delaytime)
               .verify.visible('#btnUpload')
               .pause(browser.globals.QAenv.adm_delaytime)
              .saveScreenshot('./output/screenshots/uploadDevicetemplate2.png')
              .click('#btnUpload')
              .pause(browser.globals.QAenv.adm_delaytime)
              .saveScreenshot('./output/screenshots/Deviceupload2.png')
               .pause(browser.globals.QAenv.adm_delaytime)
               .click('@BtnClose')
               .pause(browser.globals.QAenv.adm_delaytime);
               MDevice
                .pause(browser.globals.QAenv.adm_delaytime)
               .click('@DeleteDevice')
               .pause(browser.globals.QAenv.adm_delaytime)
               .click('@DeleteCloseBtn');
               MDevice
               .pause(browser.globals.QAenv.adm_delaytime)
               .click('@DeleteDevice')
               .pause(browser.globals.QAenv.adm_delaytime)
               .click('@DeleteBtn')
               .pause(browser.globals.QAenv.adm_delaytime)
               .waitForElementVisible('@ConfirmDeleteYes',10000,false,()=>{},' Confirm delete loaded')
               .click('@ConfirmDeleteYes')
               .pause(browser.globals.QAenv.adm_delaytime)
               .waitForElementVisible('@Deletetxtnote',10000,false,()=>{},'delete text note loaded')
               .setValue('@Deletetxtnote' , browser.globals.QAenv.adm_deltxtnote)
               .pause(browser.globals.QAenv.adm_delaytime)
               .waitForElementVisible('@DeleteConfirmFinal',10000,false,()=>{},'Confirm final delete loaded')
               .saveScreenshot('./output/screenshots/Delete screen page.png')
               .click('@DeleteConfirmFinal')
               .pause(browser.globals.QAenv.adm_delaytime)
                .click('@DeletePopupmsgClose')
               .pause(browser.globals.QAenv.adm_delaytime);
                MDevice
                .pause(browser.globals.QAenv.adm_delaytime)
                .verify.visible('@ExportRejectedData')
                .click('@ExportRejectedData');

      },
//
'ENSSA Admin - Add Device page ' : function(browser) {

       const adminprofilecp1 = browser.page.AdminprofileENSSA();
       adminprofilecp1
      .pause(browser.globals.QAenv.adm_delaytime)
      .verify.visible('@AddNewDevice')
      .pause(browser.globals.QAenv.adm_delaytime)
      .click('@AddNewDevice')
      .pause(browser.globals.QAenv.adm_delaytime);
      const MDeviceadd = browser.page.DeviceManagement();
       MDeviceadd
       .pause(browser.globals.QAenv.adm_delaytime)
       .verify.visible('@DeviceName')
       .verify.visible('@DeviceType')
       .verify.visible('@DeviceBrand')
       .verify.visible('@DeviceModel')
       .verify.visible('@UserAssociation')
       .verify.visible('@DateRegistered')
       //.verify.visible('@DeleteNote')
        .pause(browser.globals.QAenv.adm_delaytime)
       .setValue('@DeviceName' , browser.globals.QAenv.adm_devname + Math.floor(Math.random()*20))
        .pause(browser.globals.QAenv.adm_delaytime)
       .click('@DeviceType')
         .pause(browser.globals.QAenv.adm_delaytime)
       .click('@DeviceTypeSelection')
        .pause(browser.globals.QAenv.adm_delaytime)
       .setValue('@DeviceBrand' , browser.globals.QAenv.adm_devbrnd)
        .pause(browser.globals.QAenv.adm_delaytime)
       .setValue('@DeviceModel' , browser.globals.QAenv.adm_devmodel)
        .pause(browser.globals.QAenv.adm_delaytime)
       .click('@UserAssociation')
        .pause(browser.globals.QAenv.adm_delaytime)
       .click('@UserAssociationselection')
        .pause(browser.globals.QAenv.adm_delaytime)
        .setValue('@DateRegistered' , browser.globals.QAenv.adm_regdate);
       MDeviceadd
       .pause(browser.globals.QAenv.adm_delaytime)
       .setValue('#txtAdditionalNotes' , browser.globals.QAenv.adm_desnote)
       .saveScreenshot('./output/screenshots/AddDevicescreen.png')
       .click('@AddDeviceSave')
        .pause(browser.globals.QAenv.adm_delaytime)
        .click('@AddPopupmsgClose');
        MDeviceadd
         .pause(browser.globals.QAenv.adm_delaytime)
         .pause(browser.globals.QAenv.adm_delaytime)
         .click('@EditDevice')
         .pause(browser.globals.QAenv.adm_delaytime);
   },

 'ENSSA Admin - Edit Device page ' : function(browser) {

        const MDeviceedit = browser.page.DeviceManagement();
        MDeviceedit
         .pause(browser.globals.QAenv.adm_delaytime)
          .verify.visible('@EditDevice')
           .pause(browser.globals.QAenv.adm_delaytime)
        .click('@EditDevice')
        .pause(browser.globals.QAenv.adm_delaytime)
        .verify.visible('@EditDeviceName')
        .verify.visible('@EditDeviceType')
        .verify.visible('@EditDeviceBrand')
        .verify.visible('@EditDeviceModel')
        //.verify.visible('@UserAssociation')
        .verify.visible('@EditDateRegistered')
        .verify.visible('@EditAdditionalNote')
         .pause(browser.globals.QAenv.adm_delaytime)
         .clearValue('@EditDeviceName')
        .setValue('@EditDeviceName' , browser.globals.QAenv.adm_Editdevname)
         .pause(browser.globals.QAenv.adm_delaytime)
         .clearValue('@EditDeviceBrand')
        .setValue('@EditDeviceBrand' , browser.globals.QAenv.adm_devbrnd)
         .pause(browser.globals.QAenv.adm_delaytime)
         .clearValue('@EditDeviceModel')
        .setValue('@EditDeviceModel' , browser.globals.QAenv.adm_devmodel)
         .pause(browser.globals.QAenv.adm_delaytime)
          .clearValue('@EditDateRegistered')
        .setValue('@EditDateRegistered' , browser.globals.QAenv.adm_Editregdate)
        .pause(browser.globals.QAenv.adm_delaytime)
         .sendKeys('@EditDateRegistered', browser.Keys.ENTER)
         .sendKeys('@EditDateRegistered', browser.Keys.TAB);
        MDeviceedit
         .pause(browser.globals.QAenv.adm_delaytime)
         .clearValue('@EditAdditionalNote')
        .setValue('@EditAdditionalNote' , browser.globals.QAenv.adm_Editdesnote)
        .pause(browser.globals.QAenv.adm_delaytime)
        .click('@EditDeviceUpdateBtn')
        .pause(browser.globals.QAenv.adm_delaytime)
        .click('@EditPopupmsgClose');
        MDeviceedit
         .pause(browser.globals.QAenv.adm_delaytime)
         .click('@EditDevice')
          .pause(browser.globals.QAenv.adm_delaytime)
         .click('@EditDeviceCloseBtn');
        MDeviceedit
          .pause(browser.globals.QAenv.adm_delaytime)
          .click('@EditDevice')
           .pause(browser.globals.QAenv.adm_delaytime)
           .setValue('@EditDeviceBrand' ,'')
          .setValue('@EditDeviceBrand' , browser.globals.QAenv.adm_devbrnd)
          .pause(browser.globals.QAenv.adm_delaytime)
           .saveScreenshot('./output/screenshots/AddDevicescreen.png')
           .pause(browser.globals.QAenv.adm_delaytime)
          .click('@EditDeviceResetBtn');
          MDeviceedit
            .pause(browser.globals.QAenv.adm_delaytime)
            .click('@EditDeviceDeleteBtn')
            .pause(browser.globals.QAenv.adm_delaytime)
           .click('@EditDeleteConfirmBtn')
           .pause(browser.globals.QAenv.adm_delaytime)
           .waitForElementVisible('@EditDeletetxtNote',10000,false,()=>{},'Edit - delete user page loaded')
           .setValue('@EditDeletetxtNote' , browser.globals.QAenv.adm_deltxtnote)
           .pause(browser.globals.QAenv.adm_delaytime)
          .waitForElementVisible('@CofirmFinalDeleteEditBtn',10000,false,()=>{},'Edit - Final delete loaded')
          .click('@CofirmFinalDeleteEditBtn')
           .pause(browser.globals.QAenv.adm_delaytime)
            .click('@PopupmsgCloseEditDelete')
            .pause(browser.globals.QAenv.adm_delaytime)
            .end();

        },

 ////////////////////////Manage user///////////////////////
'ENSSA Admin - Manage User-Login With Valid credentials' : function(browser) {

      const Loginadminvc = browser.page.LoginENSSA();
       browser.pause(browser.globals.QAenv.adm_delaytime)
       Loginadminvc.navigate();
       browser.deleteCookies(function(){});
       browser.maximizeWindow();
       browser.refresh();
       const LoginMU = browser.page.LoginENSSA();
       LoginMU
       .pause(browser.globals.QAenv.adm_delaytime)
       .verify.visible('@ForgotPassword')
       .setValue('@UserName' , browser.globals.QAenv.adm_emailid)
       .setValue('@PassWord' , browser.globals.QAenv.adm_loginpwd)
       .verify.visible('@ForgotPassword','MU Admin login page loaded sucessfully')
       .saveScreenshot('./output/screenshots/MU Admin login page loaded sucessfully.png')
       .pause(browser.globals.QAenv.adm_delaytime)
       .click('@SubmitLogin')
       .pause(browser.globals.QAenv.adm_delaytime)
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
                       .click('@SubmitOTP')
                       .saveScreenshot('./output/screenshots/MU OTP page loaded sucessfully.png')
                       .pause(browser.globals.QAenv.adm_delaytime)

                        });
          },
 'ENSSA Admin - Profile page - View Current  User profile ' : function(browser) {
         const adminprofilepagevp = browser.page.AdminprofileENSSA();
         console.log (`${process.env.REVIEW_APP_URL}||${url_ref.QAenv.Actual_url}`)
         adminprofilepagevp
         .pause(browser.globals.QAenv.adm_delaytime)
        .click('@ProfileIconclick')
        .pause(browser.globals.QAenv.adm_delaytime)
        .click('@ViewProfile')
        .pause(browser.globals.QAenv.adm_delaytime)
        .waitForElementVisible('@ProfileIconclick',10000,false,()=>{},'User profile page loaded sucessfully')
        .saveScreenshot('./output/screenshots/User profile page loaded sucessfully.png')
     },
//
//// ENSSA Admin - DashBoard Page
'ENSSA Admin - Dashborad - Mange User - Normal Search ' : function(browser) {
         const adminprofilecp = browser.page.AdminprofileENSSA();
         //Get the XLSX FilePath
         let filename1 = 'e2e/test/Enssacurrentuserlist-update.xlsx';
         console.log(filename1)

          //Read the Data from the XLSX File
          workbook.xlsx.readFile(filename1)
              .then(() => {
              //Append a New Row to the XLSX File
              str_add_fname= 'Emp'+ Math.floor(Math.random() * 10000) + 1;
              str_add_lname= 'abc'+ Math.floor(Math.random() * 10000) + 1 ;
              str_add_empnum= 'Emp'+ Math.floor(Math.random() * 10000) + 1;
              str_add_empemail= 'abc'+ Math.floor(Math.random() * 10000) + 1 +'@mailinator.com';

              //console.log(str_add)
        workbook.getWorksheet('Sheet1').addRow([str_add_fname,'',str_add_lname,str_add_empemail,'viewer','school','ABC School','+919870987896','12GT','California','CA','40000','TEACHER','ABC School']);
              //Write and Save the File
                      return workbook.xlsx.writeFile(filename1);
          }).then(() => {
              //Get the Number of rows count from the Updated XLSX file.
              var workbook = XLSX.readFile(filename1);
                      var sheet_name_list = workbook.SheetNames;
                      var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
                      console.log(xlData.length);
          }).catch(err => console.error(err));

                adminprofilecp
                .pause(browser.globals.QAenv.adm_delaytime)
                .verify.visible('@DashBoardMenu')
                .click('@DashBoardMenu')
                .pause(browser.globals.QAenv.adm_delaytime)
                .verify.visible('@ManageUser')
                 .verify.visible('@ManageDevice')
                 .verify.visible('@ManageFile')
                .pause(browser.globals.QAenv.adm_delaytime)
                const adminprofilecp1 = browser.page.AdminprofileENSSA();
//                adminprofilecp1
//                .pause(browser.globals.QAenv.adm_delaytime)
//                .click('@DashBoardMenu');
                adminprofilecp1
                 .pause(browser.globals.QAenv.adm_delaytime)
                 .click('@ManageUser')
                .pause(browser.globals.QAenv.adm_delaytime)
                  .verify.visible('@DrpFilterBy')
                  .verify.visible('@TxtSearch')
                  .verify.visible('@DrpStatus')
                  .verify.visible('@BtnSearch')
                  .verify.visible('@Refresh')
                  .verify.visible('@ShowFilter')
                   .verify.visible('@ShowFilter','Manage user page loaded sucessfully')
                  .saveScreenshot('./output/screenshots/Manage user page loaded sucessfully.png')
                 adminprofilecp1
                 .pause(browser.globals.QAenv.adm_delaytime)
                 .click('@DrpFilterBy')
                 .click('@FilterFieldValueName');
                adminprofilecp1
                 .pause(browser.globals.QAenv.adm_delaytime)
                 //.click('@TxtSearch');
                 .setValue('@TxtSearch' , browser.globals.QAenv.Usersearchtext);
                adminprofilecp1
                .pause(browser.globals.QAenv.adm_delaytime)
                .click('@DrpStatus')
                .click('@StatusFieldValueActive');
                 adminprofilecp1
                 .pause(browser.globals.QAenv.adm_delaytime)
                 .click('@BtnSearch');
                 adminprofilecp1
                 .pause(browser.globals.QAenv.adm_delaytime)
                 .click('@Refresh')
                 .pause(browser.globals.QAenv.adm_delaytime)
                 .verify.visible('@ShowFilter','User Profile Normal Search result')
                 .saveScreenshot('./output/screenshots/User Profile Normal Search result.png')

    },
//
//'ENSSA Admin - Dashborad - Mange User - Elastic Search ' : function(browser) {
//
//                const adminprofileelssrch = browser.page.AdminprofileENSSA();
//                 adminprofileelssrch
//                 .pause(browser.globals.QAenv.adm_delaytime)
//                 .click('@ShowFilter')
//                 .pause(browser.globals.QAenv.adm_delaytime)
//               .verify.visible('@DrpOperationLevel')
//               .verify.visible('@DrpRole')
//               .verify.visible('@DrpAssignment')
//               .verify.visible('@DrpOraganization')
//               .verify.visible('@DrpJob');
//                 adminprofileelssrch
//                .pause(browser.globals.QAenv.adm_delaytime)
//                 .click('@DrpOperationLevel')
//                .pause(browser.globals.QAenv.adm_delaytime)
//                 .click('@DrpOperationLevelValue1')
//                .pause(browser.globals.QAenv.adm_delaytime)
//                 .click('@DrpRole')
//                .pause(browser.globals.QAenv.adm_delaytime)
//                 .click('@DrpAssignment')
//                .pause(browser.globals.QAenv.adm_delaytime)
//                 .click('@DrpOraganization')
//                .pause(browser.globals.QAenv.adm_delaytime)
//                 .click('@DrpOraganizationValue1')
//                .pause(browser.globals.QAenv.adm_delaytime)
//                 .click('@DrpJob')
//                .pause(browser.globals.QAenv.adm_delaytime)
//                 .click('@DrpJobValue1');
//                 adminprofileelssrch
//                  .pause(browser.globals.QAenv.adm_delaytime)
//                 .setValue('@TxtSearch' , browser.globals.QAenv.Usersearchtext)
//                 .pause(browser.globals.QAenv.adm_delaytime)
//                 .click('@BtnSearch')
//                 .verify.visible('@BtnSearch','User Profile Elastic Search result')
//                 .saveScreenshot('./output/screenshots/User Profile Elastic Search result.png');
//                 adminprofileelssrch
//                 .pause(browser.globals.QAenv.adm_delaytime)
//                 .click('@Refresh');
//
//},
//
'ENSSA Admin - Manage user - Upload - Download - Send Email - Rejected Entries' : function(browser) {

                const adminprofileupdwnload = browser.page.AdminprofileENSSA();
                adminprofileupdwnload
               //.verify.present('@DownloadLastRejectedEntries')
                .pause(browser.globals.QAenv.adm_delaytime)
                .pause(browser.globals.QAenv.adm_delaytime)
               .verify.visible('@FileDownloadSample')
               .verify.visible('@FileDownloadTemplate')
               .verify.visible('@FileUploadbutton');
//                 adminprofileupdwnload
//                 .pause(browser.globals.QAenv.adm_delaytime)
//                 .click('@DownloadLastRejectedEntries');
                 adminprofileupdwnload
                 .pause(browser.globals.QAenv.adm_delaytime)
                 .click('@FileDownloadSample')
                .pause(browser.globals.QAenv.adm_delaytime)
                .saveScreenshot('./output/screenshots/dwnsamptemp.png');
                adminprofileupdwnload
                .pause(browser.globals.QAenv.adm_delaytime)
                 .click('@FileDownloadTemplate')
                 .pause(browser.globals.QAenv.adm_delaytime)
                 .saveScreenshot('./output/screenshots/downsamp.png');
                  adminprofileupdwnload
                 .click('@FileUploadbutton')
                 .saveScreenshot('./output/screenshots/b4uploadfile.png')
                .pause(browser.globals.QAenv.adm_delaytime)
                .uploadLocalFile(require('path').resolve('e2e/test/Enssacurrentuserlist.xlsx'),'#lnkBrowse');
               // .setValue('#lnkBrowse', require('path').resolve('e2e/test/Enssacurrentuserlist.xlsx'));
                adminprofileupdwnload
                .pause(browser.globals.QAenv.adm_delaytime)
                .saveScreenshot('./output/screenshots/uploadfileselection.png')
                .click('#btnUpload')
                .pause(browser.globals.QAenv.adm_delaytime)
                .click('#btnClsSuccessMsg')
                .saveScreenshot('./output/screenshots/fileuploadedsucess.png')
                .pause(browser.globals.QAenv.adm_delaytime);

                adminprofileupdwnload
                .click('@FileUploadbutton')
                .saveScreenshot('./output/screenshots/b4uploadtemplate.png')
               .pause(browser.globals.QAenv.adm_delaytime)
               .uploadLocalFile(require('path').resolve('e2e/test/Enssacurrentuserlist-update.xlsx'),'#lnkBrowse');
                //.setValue('#lnkBrowse', require('path').resolve('e2e/test/Enssacurrentuserlist-update.xlsx'));
               adminprofileupdwnload
               .pause(browser.globals.QAenv.adm_delaytime)
               .saveScreenshot('./output/screenshots/uploadfileupdatedtemplate.png')
               .click('#btnUpload')
               .pause(browser.globals.QAenv.adm_delaytime)
               .saveScreenshot('./output/screenshots/b4sendmil.png')
               .click('@SendEmailClick')
               .pause(browser.globals.QAenv.adm_delaytime)
               .waitForElementVisible('#messageModel .bootbox-close-button.close',browser.globals.QAenv.adm_delaytime,false,()=>{},'Email Sent Sucessfully')
               .click('#messageModel .bootbox-close-button.close');

                 adminprofileupdwnload
                .click('@FileUploadbutton')
                .saveScreenshot('./output/screenshots/b4uploadfile1.png')
               .pause(browser.globals.QAenv.adm_delaytime)
               .uploadLocalFile(require('path').resolve('e2e/test/Enssacurrentuserlist.xlsx'),'#lnkBrowse');
               //.setValue('#lnkBrowse', require('path').resolve('e2e/test/Enssacurrentuserlist.xlsx'));
                adminprofileupdwnload
                .pause(browser.globals.QAenv.adm_delaytime)
                .saveScreenshot('./output/screenshots/uploadfileselection1.png')
                .click('#btnUpload')
                .pause(browser.globals.QAenv.adm_delaytime);
               adminprofileupdwnload
               .click('#btnExportExcel')

              .pause(browser.globals.QAenv.adm_delaytime)
              .click('#btnClsSuccessMsg')
              .saveScreenshot('./output/screenshots/fileuploadedsucess1.png')
                .pause(browser.globals.QAenv.adm_delaytime)
              //.waitForElementVisible('#messageModel .bootbox-close-button.close',browser.globals.QAenv.adm_delaytime,false,()=>{},'Sent email ')
              .click('#messageModel .bootbox-close-button.close')
              .end();

   },

};





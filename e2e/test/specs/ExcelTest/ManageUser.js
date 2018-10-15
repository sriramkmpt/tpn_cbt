const path = require('path');
const url_ref = require('../../config.js');
//const Excelhandle = require('excelhandle.js');
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
      // .pause(browser.globals.QAenv.adm_delaytime)

       },
   //// ENSSA Admin - OTP page
   'ENSSA Admin - OTP page - Enter OTP' : function(browser) {

            const otpkey = browser.page.OTPScreen();
            console.log(browser.globals.QAenv.adm_delaytime);
            let userOTP = '111111';
            browser.getValue('#testOTP', function(otp) {
                userOTP = otp.value;
                console.log(userOTP);
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
// 'ENSSA Admin - Profile page - View Current  User profile ' : function(browser) {
//         const adminprofilepagevp = browser.page.AdminprofileENSSA();
//         console.log (`${process.env.REVIEW_APP_URL}||${url_ref.QAenv.Actual_url}`)
//         adminprofilepagevp
//         .pause(browser.globals.QAenv.adm_delaytime)
//        .click('@ProfileIconclick')
//        .pause(browser.globals.QAenv.adm_delaytime)
//        .click('@ViewProfile')
//        .pause(browser.globals.QAenv.adm_delaytime)
//        .waitForElementVisible('@ProfileIconclick',10000,false,()=>{},'User profile page loaded sucessfully')
//        .saveScreenshot('./output/screenshots/User profile page loaded sucessfully.png')
//     },

////// ENSSA Admin - DashBoard Page
//'ENSSA Admin - Dashborad - Mange User - Normal Search ' : function(browser) {
//         const adminprofilecp = browser.page.AdminprofileENSSA();
//
//                adminprofilecp
//                .pause(browser.globals.QAenv.adm_delaytime)
//                .verify.visible('@DashBoardMenu')
//                .click('@DashBoardMenu')
//                .pause(browser.globals.QAenv.adm_delaytime)
//                .verify.visible('@ManageUser')
//                 .verify.visible('@ManageDevice')
//                 .verify.visible('@ManageFile')
//                .pause(browser.globals.QAenv.adm_delaytime)
//                const adminprofilecp1 = browser.page.AdminprofileENSSA();
////                adminprofilecp1
////                .pause(browser.globals.QAenv.adm_delaytime)
////                .click('@DashBoardMenu');
//                adminprofilecp1
//                 .pause(browser.globals.QAenv.adm_delaytime)
//                 .click('@ManageUser')
//                .pause(browser.globals.QAenv.adm_delaytime)
//                  .verify.visible('@DrpFilterBy')
//                  .verify.visible('@TxtSearch')
//                  .verify.visible('@DrpStatus')
//                  .verify.visible('@BtnSearch')
//                  .verify.visible('@Refresh')
//                  .verify.visible('@ShowFilter')
//                   .verify.visible('@ShowFilter','Manage user page loaded sucessfully')
//                  .saveScreenshot('./output/screenshots/Manage user page loaded sucessfully.png')
//                 adminprofilecp1
//                 .pause(browser.globals.QAenv.adm_delaytime)
//                 .click('@DrpFilterBy')
//                 .click('@FilterFieldValueName');
//                adminprofilecp1
//                 .pause(browser.globals.QAenv.adm_delaytime)
//                 //.click('@TxtSearch');
//                 .setValue('@TxtSearch' , browser.globals.QAenv.Usersearchtext);
//                adminprofilecp1
//                .pause(browser.globals.QAenv.adm_delaytime)
//                .click('@DrpStatus')
//                .click('@StatusFieldValueAll');
//                 adminprofilecp1
//                 .pause(browser.globals.QAenv.adm_delaytime)
//                 .click('@BtnSearch');
//                 adminprofilecp1
//                 .pause(browser.globals.QAenv.adm_delaytime)
//                 .click('@Refresh')
//                 .pause(browser.globals.QAenv.adm_delaytime)
//                 .verify.visible('@ShowFilter','User Profile Normal Search result')
//                 .saveScreenshot('./output/screenshots/User Profile Normal Search result.png')
//
//},

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
               .waitForElementVisible('#messageModel .bootbox-close-button.close',browser.globals.QAenv.adm_delaytime,false,()=>{},'Sent email ')
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
              .pause(browser.globals.QAenv.adm_delaytime)
              .click('#btnClsSuccessMsg')
              .saveScreenshot('./output/screenshots/fileuploadedsucess1.png')
              .waitForElementVisible('#messageModel .bootbox-close-button.close',browser.globals.QAenv.adm_delaytime,false,()=>{},'Sent email ')
              .click('#messageModel .bootbox-close-button.close');

   },
};
//                const adminprofilecp2 = browser.page.AdminprofileENSSA();
//                adminprofilecp2
//                .pause(browser.globals.QAenv.adm_delaytime)
//                .click('@DashBoardMenu');
//                adminprofilecp2
//                .pause(browser.globals.QAenv.adm_delaytime)
//                .click('@ManageDevice');
//                const adminprofilecp3 = browser.page.AdminprofileENSSA();
//                adminprofilecp3
//                .pause(browser.globals.QAenv.adm_delaytime)
//                .click('@DashBoardMenu');
//                adminprofilecp3
//                .pause(browser.globals.QAenv.adm_delaytime)
//                .click('@ManageFile');

//                adminprofilecp
//                .pause(browser.globals.QAenv.adm_delaytime)
//                .click('@DashBoardMenu');
//                adminprofilecp
//                .pause(browser.globals.QAenv.adm_delaytime)
//                .click('@IncidentDropdown');



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
//               adminprofilecp
//               .click('@FileUploadbutton')
//               .saveScreenshot('./output/screenshots/b4uploadtemplate.png')
//              .pause(browser.globals.QAenv.adm_delaytime)
//              //.uploadLocalFile(require('path').resolve('e2e/test/enssa-users-list-sample-updated.xlsx'),'#lnkBrowse');
//               .setValue('#lnkBrowse', require('path').resolve('e2e/test/enssa-testuser-latest -updated.xlsx'));
//              adminprofilecp
//              .pause(browser.globals.QAenv.adm_delaytime)
//              .saveScreenshot('./output/screenshots/uploadfiletemplate.png')
//               .click('#btnUpload')
//               .pause(browser.globals.QAenv.adm_delaytime)
//               .saveScreenshot('./output/screenshots/b4sendmil.png')
               //.click('@SendEmailClick')
//               .pause(browser.globals.QAenv.adm_delaytime)
//               .waitForElementVisible('#messageModel .bootbox-close-button.close',browser.globals.QAenv.adm_delaytime,false,()=>{},'Sent email ')
//               .click('#messageModel .bootbox-close-button.close')
//               .waitForElementVisible('@SearchQueryTextbox',browser.globals.QAenv.adm_delaytime,false,()=>{},'Search refresh download success')
//               .saveScreenshot('./output/screenshots/Search refresh download success.png');
//               console.log(" sent mail msg popup completed")
//                .click('@ExportRejecteData')
//       },

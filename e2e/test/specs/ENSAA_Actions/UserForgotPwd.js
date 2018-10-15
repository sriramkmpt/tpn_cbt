const path = require('path');
const url_ref = require('../../config.js');
module.exports = {
//Positive Scenarios
//login with valid user Name and Password
//// JiraTicket-Login with valid ENSSA user and click Forgot Password link
'ENSSA-JiraTicket check - Forgot password- Login Page - Submit Valid user ' : function(client) {
       client.deleteCookies(function(){});
       client.maximizeWindow();
       client.refresh();
       client.pause(client.globals.QAenv.usr_delaytime)
       client.refresh();
       const Loginvc = client.page.LoginENSSA();
       Loginvc.navigate()
       .pause(client.globals.QAenv.usr_delaytime)
       .verify.visible('@UserName')
       .verify.visible('@PassWord')
       .verify.visible('@SubmitLogin')
       .verify.visible('@ForgotPassword')
       .verify.visible('@ForgotPassword','login page loaded sucessfully')
       .saveScreenshot('./output/screenshots/login page loaded sucessfully.png')
       .click('@ForgotPassword');
     },

////Forgot password
'ENSSA - JiraTicket check - Forgot Password-Cancel Button click  ' : function(client) {
             const Forgotpwdsubmitvc = client.page.ForgotpwdENSSA();
             Forgotpwdsubmitvc
              .pause(client.globals.QAenv.usr_delaytime)
              .verify.visible('@EmailID')
              .setValue('@EmailID' , 'Invalidensaauser@gmail.com')
              .pause(client.globals.QAenv.usr_delaytime)
              .verify.visible('@EmailID','InValid ENSAA User')
              .saveScreenshot('./output/screenshots/InValid ENSAA User.png')
              .click('@Cancelbtn')
               },
////Forgot Password - Login with valid ENSSA user and verify the email
'ENSSA - Forgot password- Login Page - Submit Valid user ' : function(client) {
            const Forgotpwdvc = client.page.LoginENSSA();
            Forgotpwdvc
            .verify.visible('@ForgotPassword')
            .pause(client.globals.QAenv.usr_delaytime)
            .click('@ForgotPassword');
     },

////Forgot password
'ENSSA - Forgot Password-Submit Valid user receives mail  ' : function(client) {
             const Forgotpwdsubmitvc = client.page.ForgotpwdENSSA();
             Forgotpwdsubmitvc
              .pause(client.globals.QAenv.usr_delaytime)
              .verify.visible('@EmailID')
              .setValue('@EmailID' , 'ssivaramakrishnan@thapovan-inc.com')
              .pause(client.globals.QAenv.usr_delaytime)
              .verify.visible('@EmailID','Valid ENSAA User')
              .saveScreenshot('./output/screenshots/Valid ENSAA User.png')
              .click('@Submitbtn')
               .pause(client.globals.QAenv.usr_delaytime)
              .click('@Popmsgclosebtn');
               },
//
////Negative Scenarios
//Negative Scenarios-Forgot Password - Check with Invalid ENSSA user
'ENSSA - Negative Scenarios-Forgot password- Check with Invalid ENSSA user ' : function(client) {
             const Forgotpwdngtviu = client.page.LoginENSSA();
             Forgotpwdngtviu
             .verify.visible('@ForgotPassword')
             .pause(client.globals.QAenv.usr_delaytime)
             .click('@ForgotPassword');
    },
'ENSSA - Forgot Password-Submit Button -Invalid User  ' : function(client) {
              const Forgotpwdngtvchk = client.page.ForgotpwdENSSA();
              Forgotpwdngtvchk
               .pause(client.globals.QAenv.usr_delaytime)
               .verify.visible('@Submitbtn')
               .setValue('@EmailID' , 'Invaliduser@gmail.com')
               .pause(client.globals.QAenv.usr_delaytime)
               .verify.visible('@Submitbtn','Invalid user clicks submit button')
               .saveScreenshot('./output/screenshots/Invalid user clicks submit button.png')
              .click('@Submitbtn')
              .pause(client.globals.QAenv.usr_delaytime)
               .click('@Popmsgclosebtn');
                }

};
const path = require('path');
const url_ref = require('../../config.js');
module.exports = {
//Positive Scenarios
//login with valid user Name and Password
'ENSSA-JiraTicket check -Positive Scenarios-Login With Valid credentials' : function(client) {
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
       .setValue('@UserName' ,client.globals.QAenv.usr_emailid)
       .setValue('@PassWord' ,client.globals.QAenv.usr_loginpwd)
       .pause(client.globals.QAenv.usr_delaytime)
       .click('@SubmitLogin');
       },
// Profile page
'ENSSA-JiraTicket check - Profile page' : function(client) {
        const profilepage = client.page.UserprofileENSSA();
        profilepage
        .pause(client.globals.QAenv.usr_delaytime)
       .waitForElementVisible('@ProfileIconclick',10000,false,()=>{},'profile page loaded sucessfully')
       .saveScreenshot('./output/screenshots/profile page loaded sucessfully.png')
       .click('@ProfileIconclick')
       .pause(client.globals.QAenv.usr_delaytime)
       .click('@LogOut')
       .pause(client.globals.QAenv.usr_delaytime);
    },

//// JiraTicket-Login with valid ENSSA user and click Forgot Password link
'ENSSA-JiraTicket check - Forgot password- Login Page - Submit Valid user ' : function(client) {
            const Forgotpwdvc = client.page.LoginENSSA();
            Forgotpwdvc
            .verify.visible('@ForgotPassword')
            .pause(client.globals.QAenv.usr_delaytime)
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

'ENSAA - JiraTicket check - Login with INVALID credentials' : function(client) {
                   client.deleteCookies(function(){});
                   client.maximizeWindow();
                   const Logininvup = client.page.LoginENSSA();
                   Logininvup.navigate()
                   .pause(client.globals.QAenv.usr_delaytime)
                   .setValue('@UserName' , 'enssatestuser@mailinator.com')
                   .setValue('@PassWord' , 'Admin123@@')
                   .pause(client.globals.QAenv.usr_delaytime)
                   .verify.visible('@SubmitLogin','Invalid user name and pwd')
                   .saveScreenshot('./output/screenshots/Invalid user name and pwd.png')
                   .click('@SubmitLogin')
                   .pause(client.globals.QAenv.usr_delaytime);
            },
'ENSSA - Login to ENSSA - INVALID User Name Check' : function(client) {
                  const Logininvu = client.page.LoginENSSA();
                   Logininvu
                   .pause(client.globals.QAenv.usr_delaytime)
                    .setValue('@UserName' , 'enssatestuser@mailinator.com')
                   .setValue('@PassWord' ,client.globals.QAenv.usr_newpwd)
                   .pause(client.globals.QAenv.usr_delaytime)
                   .click('@SubmitLogin')
                   .verify.visible('@SubmitLogin','Invalid user name')
                   .saveScreenshot('./output/screenshots/Invalid user name.png')
                   .pause(client.globals.QAenv.usr_delaytime);
            },
'ENSSA - Login to ENSSA - INVALID Password Check' : function(client) {
                 const Logininvp = client.page.LoginENSSA();
                   Logininvp
                   .pause(client.globals.QAenv.usr_delaytime)
                   .setValue('@UserName' ,client.globals.QAenv.usr_emailid)
                   .setValue('@PassWord' , 'Admin123@@')
                   .pause(client.globals.QAenv.usr_delaytime)
                   .click('@SubmitLogin')
                  .verify.visible('@SubmitLogin','Invalid Pwd')
                  .saveScreenshot('./output/screenshots/Invalid Pwd.png')
                  .pause(client.globals.QAenv.usr_delaytime);
            }

 };

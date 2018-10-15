const path = require('path');
const url_ref = require('../../config.js');
module.exports = {
//Positive Scenarios
//login with valid user Name and Password
'ENSSA - Positive Scenarios-Login With Valid credentials' : function(client) {
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
'ENSSA - Profile page' : function(client) {
        const profilepage = client.page.UserprofileENSSA();
        profilepage
        .pause(client.globals.QAenv.usr_delaytime)
       .waitForElementVisible('@ProfileIconclick',10000,false,()=>{},'profile page loaded sucessfully')
       .saveScreenshot('./output/screenshots/profile page loaded sucessfully.png')
       .click('@ProfileIconclick')
       .pause(client.globals.QAenv.usr_delaytime)
       .click('@ChangePassword')
       .pause(client.globals.QAenv.usr_delaytime);
    },
// Changing the password
'ENSSA -  First time Change Password ' : function(client) {
        const changepwd = client.page.Changepwd();
        changepwd
         .pause(client.globals.QAenv.usr_delaytime)
         .verify.visible('@Oldpwd')
         .verify.visible('@Newpwd')
         .verify.visible('@ConfirmPwd')
         .setValue('@Oldpwd' ,client.globals.QAenv.usr_loginpwd)
         .setValue('@Newpwd' ,client.globals.QAenv.usr_newpwd)
         .setValue('@ConfirmPwd' ,client.globals.QAenv.usr_newpwd)
         .verify.visible('@ConfirmPwd','Change password screen loaded sucessfully')
         .saveScreenshot('./output/screenshots/Change password screen loaded sucessfully.png')
         .click('@SubmitbtnSubmit')
         .pause(client.globals.QAenv.usr_delaytime)
         .click('@Closechangepwd')
         .pause(client.globals.QAenv.usr_delaytime);
          },
'ENSSA - Login to ENSSA- With changed password credentials' : function(client) {
           const Loginnp = client.page.LoginENSSA();
           Loginnp.navigate()
           .pause(client.globals.QAenv.usr_delaytime)
           .verify.visible('@ForgotPassword')
           .setValue('@UserName' ,client.globals.QAenv.usr_emailid)
           .setValue('@PassWord' ,client.globals.QAenv.usr_newpwd)
           .verify.visible('@ForgotPassword','login page loaded sucessfully')
           .saveScreenshot('./output/screenshots/login page loaded sucessfully.png')
           .pause(client.globals.QAenv.usr_delaytime)
           .click('@SubmitLogin');
           },

'ENSSA - Logout functionality-profile icon-click logout ' : function(client) {
             const profilelogout = client.page.UserprofileENSSA();
             profilelogout
             .pause(client.globals.QAenv.usr_delaytime)
             .verify.visible('@ProfileIconclick')
             .click('@ProfileIconclick')
             .pause(client.globals.QAenv.usr_delaytime)
             .verify.visible('@ProfileIconclick','Logout loaded sucessfully')
             .saveScreenshot('./output/screenshots/Logout loaded sucessfully.png')
             .click('@LogOut')
              },
//// Profile page
'ENSSA - Profile page - change pwd with old pwd check' : function(client) {
        const Logininvoppf = client.page.LoginENSSA();
         Logininvoppf
         .pause(client.globals.QAenv.usr_delaytime)
         .setValue('@UserName' ,client.globals.QAenv.usr_emailid)
         .setValue('@PassWord' ,client.globals.QAenv.usr_newpwd)
         .verify.visible('@SubmitLogin','change pwd with old pwd check')
         .saveScreenshot('./output/screenshots/change pwd with old pwd check.png')
         .pause(client.globals.QAenv.usr_delaytime)
         .click('@SubmitLogin');
        const profilepageop = client.page.UserprofileENSSA();
        profilepageop
        .pause(client.globals.QAenv.usr_delaytime)
       .waitForElementVisible('@ProfileIconclick',10000,false,()=>{},'profile page for op loaded sucessfully')
       .saveScreenshot('./output/screenshots/profile page for op loaded sucessfully.png')
       .click('@ProfileIconclick')
       .pause(client.globals.QAenv.usr_delaytime)
       .click('@ChangePassword')
       .pause(client.globals.QAenv.usr_delaytime);
    },

//// Changing the password-incorrect old password
'ENSSA - Change Password - Incorrect Old password ' : function(client) {
        const changepwd1 = client.page.Changepwd();
        changepwd1
         .pause(client.globals.QAenv.usr_delaytime)
         .setValue('@Oldpwd' ,client.globals.QAenv.usr_loginpwd)
         .setValue('@Newpwd' ,client.globals.QAenv.usr_newpwd)
         .setValue('@ConfirmPwd' ,client.globals.QAenv.usr_newpwd)
         .verify.visible('@ConfirmPwd','incorrect old password')
         .saveScreenshot('./output/screenshots/incorrect old password.png')
         .click('@SubmitbtnSubmit')
         .pause(client.globals.QAenv.usr_delaytime)
         .click('@Closechangepwderrmsg')
         .pause(client.globals.QAenv.usr_delaytime);
          },

// Changing the password
'ENSSA -  Change Password - To Original  ' : function(client) {
              const changepwdcp = client.page.Changepwd();
              changepwdcp
               .pause(client.globals.QAenv.usr_delaytime)
              .verify.visible('@Oldpwd')
              .verify.visible('@Newpwd')
              .verify.visible('@ConfirmPwd')
               .setValue('@Oldpwd' ,client.globals.QAenv.usr_newpwd)
               .setValue('@Newpwd' ,client.globals.QAenv.usr_loginpwd)
               .setValue('@ConfirmPwd' ,client.globals.QAenv.usr_loginpwd)
               .verify.visible('@Oldpwd','Restore Change password screen loaded sucessfully')
               .saveScreenshot('./output/screenshots/Restore Change password screen loaded sucessfully.png')
               .click('@SubmitbtnSubmit')
               .pause(client.globals.QAenv.usr_delaytime)
               .click('@Closechangepwd')
               .end();
               }

 };

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
             .click('@LogOut');
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
     },

//////Forgot Password - Login with Invalid ENSSA user - Click Cancel
'ENSSA - Forgot password- Invalid ENSSA user - Click Cancel ' : function(client) {
                const Forgotpwdcancel1 = client.page.LoginENSSA();
                Forgotpwdcancel1
                 .verify.visible('@ForgotPassword')
                .pause(client.globals.QAenv.usr_delaytime)
                .click('@ForgotPassword');
         },
'ENSSA - Forgot Password-Cancel Button click  ' : function(client) {
                const Forgotpwcancelchk = client.page.ForgotpwdENSSA();
                Forgotpwcancelchk
                  .pause(client.globals.QAenv.usr_delaytime)
                 .verify.visible('@Cancelbtn')
                 .verify.visible('@Submitbtn')
                 .setValue('@EmailID' , 'Invalidensaauser@gmail.com')
                 .verify.visible('@Submitbtn' ,'Invalid ENSSA user clicks cancel button')
                 .saveScreenshot('./output/screenshots/Invalid ENSSA user clicks cancel button.png')
                 .pause(client.globals.QAenv.usr_delaytime)
                 .click('@Cancelbtn');
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
            },

'ENSSA - Negative Confirm password Scenario-Old password' : function(client) {
                 const Logininvop = client.page.LoginENSSA();
                   Logininvop
                   .pause(client.globals.QAenv.usr_delaytime)
                   .setValue('@UserName' ,client.globals.QAenv.usr_emailid)
                   .setValue('@PassWord' ,client.globals.QAenv.usr_loginpwd)
                   .verify.visible('@SubmitLogin','Invalid Old Pwd')
                   .saveScreenshot('./output/screenshots/Invalid Old Pwd.png')
                   .pause(client.globals.QAenv.usr_delaytime)
                   .click('@SubmitLogin');
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
       },

 };

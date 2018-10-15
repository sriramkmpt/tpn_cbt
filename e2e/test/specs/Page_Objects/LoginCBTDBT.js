const url_ref = require('../../config.js');
        const commands = {

        pause(time) {
                this.api.pause(time);
                return this;
            },
         saveScreenshot(filePath) {
                this.api.saveScreenshot(filePath);
                return this;
            },
          end() {
                this.api.end();
                return this;
            },
        }

console.log(url_ref.QAenv.Actual_url)
console.log (`${process.env.REVIEW_APP_URL}||${url_ref.QAenv.Actual_url}`)
    if (`${process.env.REVIEW_APP_URL}` == 'undefined')
        {
        currenturl = `${url_ref.QAenv.Actual_url}`;
        //currenturl = `${url_ref.QAenv.Actual_url}`;
        }
     else
        {
        currenturl = `${process.env.REVIEW_APP_URL}`;
        }

   module.exports = {
        // url: `${process.env.REVIEW_APP_URL}|| ${Actual_url}`,
            url: currenturl,
        commands: [commands],
            //////////////HomePage////////////
            elements: {
            //For Login Screen

                UserName: {
                    selector: '#txtEmailID'
                },
                PassWord: {
                    selector: '#txtPwd'
                },
                SubmitLogin: {
                    selector: '#btnLogin'
                },
                 ForgotPassword: {
                    selector: '#lnkForgotPassword'
                 },
                UserOTP: {
                     selector: '#txtUserOTP'
                 },
                ResendOTP: {
                     selector: '#btnResendOTP'
                 },
                CancelOTP: {
                     selector: '#btnOTPCancel'
                 },
                SubmitOTP: {
                     selector: '#btnOTPSubmit'
                 },

            }
        }


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
        currenturl = `${url_ref.QAenv.Actual_url}/pages/profile`;
        }
     else
        {
        currenturl = `${process.env.REVIEW_APP_URL}/pages/profile`;
        }

   module.exports = {
        // url: `${process.env.REVIEW_APP_URL}|| ${Actual_url}`,
            url: currenturl,
        commands: [commands],
            //////////////HomePage////////////
            elements: {
            //For Login Screen

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


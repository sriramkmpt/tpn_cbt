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
console.log (`${process.env.REVIEW_APP_URL}||${url_ref.QAenv.Actual_url}`)
    if (`${process.env.REVIEW_APP_URL}` == 'undefined')
        {
        currenturl = `${url_ref.QAenv.Actual_url}/login`;
        }
     else
        {
        currenturl = `${process.env.REVIEW_APP_URL}/login`;
        }
    module.exports = {
            url: currenturl,
        commands: [commands],
            //////////////HomePage////////////
            elements: {
            //For Forgot Password Screen

                EmailID: {
                    selector: '#txtUserEmailID'
                },
                Submitbtn: {
                     selector: '#btnForgotSubmit'
                 },
                 Cancelbtn: {
                      selector: '#btnForgotCancel'
                  },
            }
        }


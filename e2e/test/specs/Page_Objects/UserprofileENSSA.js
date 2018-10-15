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
        currenturl = `${url_ref.QAenv.Actual_url}/pages/profile`;
        }
     else
        {
        currenturl = `${process.env.REVIEW_APP_URL}/pages/profile`;
        }
     module.exports = {
            url: currenturl,
        commands: [commands],
            //////////////HomePage////////////
            elements: {
            //For User profile Screen

//                FirstName: {
//                    selector: '#txtFirstName'
//                },
//                MiddleName: {
//                    selector: '#txtMiddleName'
//                },
//                LastName: {
//                    selector: '#txtLastName'
//                },
//                 SubmitCancel: {
//                     selector: '#btnCancel'
//                 },
//                SubmitBtnsubmit: {
//                      selector: '#btnSubmit'
//                },
                ChangePassword: {
                      selector: '#lnkChangePassword'
                },
                LogOut: {
                      selector: '#lnkLogout'
                },
                ProfileIconclick: {
                       selector: '#lnkUserProfile'
                },

            }
        }


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

            module.exports = {
            url: `${process.env.REVIEW_APP_URL}/pages/profile`,
            commands: [commands],
            //////////////HomePage////////////
            elements: {
            //For Changepwd Screen

                Choosefile: {
                    selector: '#fileUploader'
                },

                btnUpload: {
                    selector: '#btnUpload'
                },
                 txtSearchQuery: {
                     selector: '#txtSearchQuery'
                 },
                 btnSearch: {
                   selector: '#lnkUserFilter'
                  },
                  btnSearchdefault: {
                    selector: '#lnkReset'
                   },
            }
        }


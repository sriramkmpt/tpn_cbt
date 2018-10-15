
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
    containsText(element, expectedTest, msg) {
        this.api.assert.containsText(element, expectedTest, msg);
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
    currenturl = `${url_ref.QAenv.Actual_url}/pages/managefile`;
}
else
{
    currenturl = `${process.env.REVIEW_APP_URL}/pages/managefile`;
}

module.exports = {
    // url: `${process.env.REVIEW_APP_URL}|| ${Actual_url}`,
    url: currenturl,
    commands: [commands],
    //////////////HomePage////////////
    elements: {
        //For Login Screen

        SearchText: {
            selector: '#txtSearch'
        },
        SearchIcon: {
            selector: '#btnSearch'
        },
        Refresh: {
            selector: '#btnReset'
        },
        OperationStatus: {
            selector: '#drpStatus'
        },
         LeftMenu1: {
            selector: '#rootFolder1'
        },
         LeftMenu2: {
            selector: '#rootFolder2'
        },
         LeftMenu3: {
            selector: '#rootFolder3'
        },
         LeftMenu4: {
            selector: '#rootFolder4'
         },
        AddDoc: {
            selector: '#lnkAddDocument'
        },
        Title: {
            selector: '#txtTitle'
        },
        Description: {
            selector: '#txtDescription'
         },
        AddFile: {
            selector: '#btnAddDocument'
        },
        Cancel: {
            selector: '#btnAddCancel'
         },
        Closepopup: {
            selector: '#messageModel .close'
         },

        Download: {
            selector: '#lnkDownloadFile1'
         },
        Edit: {
            selector: '#lnkEditFile1'
        },
        Delete: {
            selector: '#lnkDeleteFile1'
         },
        EditTitle: {
            selector: '#txtEditTitle'
        },
        EditDescription: {
            selector: '#txtEditDescription'
         },
        EditSave: {
            selector: '#btnEditSave'
        },
        EditCancel: {
            selector: '#btnEditCancel'
         },
        OptionSelection:{
         selector : '#drpStatus > option:nth-child(2)'
         },

    }
}



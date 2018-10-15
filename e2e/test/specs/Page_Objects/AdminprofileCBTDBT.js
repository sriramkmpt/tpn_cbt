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
        currenturl = `${url_ref.QAenv.Actual_url}/pages/manageuser`;
        }
     else
        {
        currenturl = `${process.env.REVIEW_APP_URL}/pages/manageuser`;
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
                ViewProfile: {
                       selector: '#lnkProfile'
                },
                SearchQueryTextbox: {
                        selector: '#txtSearchQuery'
                },

                SearchdiscountFilter: {
                          selector: '#discountFilter'
                },

                RefreshbuttonFilter: {
                          selector: '.fa.fa-refresh'
                },

                FileDownloadSample: {
                          selector: '#lnkDownloadSample'
                },
                FileDownloadTemplate: {
                          selector: '#lnkDownloadTemplate'
                },

                FileUploadbutton: {
                          selector: '#lnkFileUpload'
                 },

                AddNewDevice: {
                          selector: '#lnkAddNewDevice'
                 },
                SendEmailClick: {
                          selector: '#btnSendEmail'
                 },

                ClosePopupMsg: {
                          selector:'.bootbox-close-button.close'
                 },
                 ExportRejecteData: {
                           selector:'.fa.fa-file-excel-o'
                  },
                  DashBoardMenu: {
                            selector:'#sidebarCollapse'
                   },
                  ManageUser: {
                            selector:'#lnkManageUser'
                   },

                   ManageDevice: {
                            selector:'#lnkManageDevice'
                    },
                   ManageFile: {
                            selector:'#lnkManageFile'
                    },
                   ContentDropdown: {
                            selector:'#contentDropdown'
                   },
                  IncidentDropdown: {
                            selector:'#incidentDropdown'
                   },

                  DrpFilterBy: {
                            selector:'#drpFilterBy'
                   },
                  TxtSearch: {
                            selector:'#txtSearch'
                   },
                  DrpStatus: {
                            selector:'#drpStatus'
                   },
                  BtnSearch: {
                            selector:'#btnSearch'
                   },
                  Refresh: {
                            selector:'#btnReset'
                   },
                  DownloadLastRejectedEntries: {
                            selector:'#btnExportExcel'
                   },
                  ShowFilter: {
                            selector:'#lnkShowFilter'
                   },
                   FilterFieldValueName:{
                            selector: "option[value='name']"
                   },
                   FilterFieldValueAll:{
                            selector: "option[value='ALL']"
                   },
                   FilterFieldValuePhone:{
                            selector: "option[value='phone']"
                   },
                   FilterFieldValueAddress:{
                            selector: "option[value='email']"
                   },
                   StatusFieldValueAll:{
                            selector: "option[value='ALL']"
                   },
                   StatusFieldValueActive:{
                            selector: "option[value='y']"
                   },
                   StatusFieldValueInactive:{
                            selector: "option[value='n']"
                   },

                   DrpOperationLevel:{
                            selector : '#multiDrpOperationLevel'
                   },
                  DrpOperationLevelValue1:{
                           selector :'#multiDrpOperationLevel > div > div.dropdown-list > div.list-area > ul > span > li:nth-child(1) > label'
                    },
                   DrpRole:{
                            selector : '#multiDrpRole'
                    },
                   DrpAssignment:{
                            selector : '#multiDrpAssignment'
                   },
                   DrpOraganization:{
                            selector : '#multiDrpOraganization'
                    },
                   DrpOraganizationValue1:{
                            selector: '#multiDrpOraganization > div > div.dropdown-list > div.list-area > ul > span > li:nth-child(1) > label'
                   },
                   DrpJob:{
                            selector : '#multiDrpJob'
                    },
                   DrpJobValue1:{
                            selector: '#multiDrpJob > div > div.dropdown-list > div.list-area > ul > span > li:nth-child(1) > label'
                   },


            }
        }



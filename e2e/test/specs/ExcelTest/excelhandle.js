const Excel = require('exceljs');
let workbook = new Excel.Workbook();
const fs = require('fs');
var XLSX = require('xlsx')
const assert = require("chai").assert;

module.exports = {
  'Excel read and write' : function (client) {

   //Get the XLSX FilePath
   let filename1 = 'e2e\\test\\Enssacurrentuserlist-update.xlsx';
   console.log(filename1)

    //Read the Data from the XLSX File
    workbook.xlsx.readFile(filename1)
        .then(() => {
        //Append a New Row to the XLSX File
        str_add_fname= 'Emp'+ Math.floor(Math.random() * 10000) + 1;
        str_add_lname= 'abc'+ Math.floor(Math.random() * 10000) + 1 ;
        str_add_empnum= 'Emp'+ Math.floor(Math.random() * 10000) + 1;
        str_add_empemail= 'abc'+ Math.floor(Math.random() * 10000) + 1 +'@mailinator.com';

        //console.log(str_add)
  workbook.getWorksheet('Sheet1').addRow([str_add_fname,'',str_add_lname,str_add_empemail,'viewer','school','ABC School','+919870987896','12GT','California','CA','40000','TEACHER','ABC School']);
        //Write and Save the File
                return workbook.xlsx.writeFile(filename1);
    }).then(() => {
        //Get the Number of rows count from the Updated XLSX file.
        var workbook = XLSX.readFile(filename1);
                var sheet_name_list = workbook.SheetNames;
                var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
                console.log(xlData.length);
    }).catch(err => console.error(err));
    client.end();
},
}
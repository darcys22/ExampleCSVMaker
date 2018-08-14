var fs = require('fs');

var stuff = "{\"businessName\":\"Darcy Financial Pty Ltd\",\"tradingName\":\"Zzz Accounting\",\"name\":\"Sean\",\"secondName\":\"Middle\",\"surname\":\"Darcy\",\"abn\":\"84 623 612 215\",\"address\":\"123 fake street\",\"address2\":\"\",\"suburb\":\"Albury\",\"state\":\"NSW\",\"postcode\":\"2640\",\"grossPayments\":\"1000\",\"gst\":\"100\",\"taxWithheld\":\"0\",\"amendment\":\"O\"}";

var obj = JSON.parse(stuff);

var dataToWrite = '"'
dataToWrite += Object.getOwnPropertyNames(obj).join('","')
dataToWrite += '"\n"'
for(var key in obj) {
    dataToWrite += obj[key] + '","'
}
dataToWrite += '"'

fs.writeFile('example.csv', dataToWrite, 'utf8', function (err) {
  if (err) {
      console.log('Some error occured - file either not saved or corrupted file saved.');
    } else{
        console.log('It\'s saved!');
        }
});


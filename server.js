var xlsx_api = require('xls_to_json_api');
var express = require('express');
var serveIndex = require('serve-index');
var app = express();

app.use(express.static('./'));

app.get('/express', function (req, res) {
  res.send('Hello World!');
});

// Case sensitive names of the sheets expected to be in the source xlsx file
var sheets = [
  "aliens",
  "catchphrase",
  "death",
  "exposition",
  "fight",
  "flipComm",
  "hugAndKiss",
  "landingParty"

/*  "love",
  "mccoy",
  "medicine",
  "dataPadd",
  "phlebotinum",
  "setPiece",
  "sexism",
  "space",
  "spock",
  "stShuffle",
  "telephone",
  "transporter",
  "tricorder",
  "warp"
  "rayGun"
*/  
];

// Prepare the XLSX -> JSON transformer and register routes in express to the JSON api
xlsx_api(app, {
  sheets: sheets,                  // Array of sheet names (case sensitive)
  dataDir: __dirname+'/data',      // directory which holds the source xlsx file and where the data will be extracted from into .json files
  xlsxSource: 'starTrekTropes.xlsm' // The name of the your xlsx source file within the data dir above
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Service listening at http://%s:%s', host, port);
});

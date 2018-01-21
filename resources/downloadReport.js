var path = require('path'); 
var csv = require("fast-csv");
var fs = require("fs");

var db = require(path.join(__dirname, "..", "database", "dbOperations.js"));

module.exports.execute= function(req,res){
	
	console.log("Request Received");
	db.getKitchenTable(function(data){
		console.log(data);
		data = JSON.parse(data);
		
		var csvStream = csv.format({headers: true}),
		writableStream = fs.createWriteStream("report.csv");
		
		writableStream.on("finish", function(){
		  console.log("DONE!");
		  res.setHeader('Content-disposition', 'attachment; filename=report.csv');
		  res.setHeader('Content-type', 'text/csv');
		  fs.createReadStream('report.csv').pipe(res);
		});
		
		csvStream.pipe(writableStream);
		for(var i=0; i<data.length; i++)
		{
			csvStream.write({"Dish Name": data[i].name, "Produced": data[i].created_till_now, "Predicted": data[i].predicted});
		}
		csvStream.end();
	});
	
}
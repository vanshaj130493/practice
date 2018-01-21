var path = require('path'); 
var csv = require("fast-csv");
var fs = require("fs");

var db = require(path.join(__dirname, "..", "database", "dbOperations.js"));

module.exports.execute= function(req,res){
	
	console.log("Request Received");
	db.getKitchenTable(function(json_data){
		console.log(json_data);
		
		var csvStream = csv.format({headers: true}),
		writableStream = fs.createWriteStream("report.csv");
		
		writableStream.on("finish", function(){
		  console.log("DONE!");
		  res.setHeader('Content-disposition', 'attachment; filename=report.csv');
		  res.setHeader('Content-type', 'text/csv');
		  fs.createReadStream('report.csv').pipe(res);
		});
		
		csvStream.pipe(writableStream);
		for(data in json_data)
		{
			csvStream.write({"Dish Name": data.name, "Produced": data.created_till_now, "Predicted": data.predicted});
		}
		csvStream.end();
	});
	
}
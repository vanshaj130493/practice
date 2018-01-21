var path = require('path'); 

var db = require(path.join(__dirname, "..", "database", "dbconnect.js"));

module.exports.execute= function(req,res){
	console.log("Request Received");
	db.executequery("create table kitchen (id serial, name varchar(200), quantity int, created_till_now int, predicted int);",function(output){
		console.log(output);
		db.executequery("select * from kitchen;",function(output){
		console.log(output);
	});
	});
	
}
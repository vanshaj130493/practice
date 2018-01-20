var path = require('path'); 

var db = require(path.join(__dirname, "..", "database", "dbconnect.js"));

module.exports.execute= function(req,res){
	console.log("Request Received");
	db.executequery(req,res);
	//res.end("Success !!");
	return;
}
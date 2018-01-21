var path = require('path'); 

var db = require(path.join(__dirname, "..", "database", "dbOperations.js"));

module.exports.execute= function(req,res){
	
	console.log("Request Received");
	db.getKitchenTable(function(data){
		console.log(data);
		res.end(data);
	});
}
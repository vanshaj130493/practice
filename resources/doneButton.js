var path = require('path'); 

var db = require(path.join(__dirname, "..", "database", "dbOperations.js"));

module.exports.execute= function(req,res){
	
	console.log("Request Received");
	var name = req.body.itemName;
	db.updateCreatedTillNow(name);
	res.end("Well Done, Keep preparing more !!");
}
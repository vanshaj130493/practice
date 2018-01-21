var path = require('path'); 

var db = require(path.join(__dirname, "..", "database", "dbOperations.js"));

module.exports.execute= function(req,res){
	
	console.log("Request Received");
	var name = req.body.itemName;
	var predictedValue = req.body.predictedValue;
	console.log(name + " :: " + predictedValue);
	db.updatePredicted(name,predictedValue);
	res.end("Predicted Value set successfully !!");
	});
}
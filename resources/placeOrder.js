var path = require('path'); 

var db = require(path.join(__dirname, "..", "database", "dbOperations.js"));

module.exports.execute= function(req,res){
	console.log("Request Received");
	var name = req.body.itemName;
	var quantity = req.body.quantity;
	console.log(name + " :: " + quantity);
	db.checkItem(name,quantity, function(flag){
		console.log(flag);
		if(flag == false)
			db.insertItem(name,quantity);
		res.end("Order Placed !!");
	});
}
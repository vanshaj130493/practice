var path = require('path'); 

var db = require(path.join(__dirname, "dbconnect.js"));

module.exports.checkItem= function(name, quantity, callback){
	var query = "select * from kitchen where name = '" + name + "' and quantity = " + quantity + ";";
	console.log(query);
	db.executequery(query, function(res){
		console.log(res);
		if (res == undefined || res == "" || res == null)
			callback(false);
		else
			callback(true);
	});
}

module.exports.insertItem= function(name, quantity){
	var query = "insert into kitchen (name, quantity, created_till_now, predicted) values ('" + name + "', " + quantity + ", 0, 0);";
	console.log(query);
	db.executequery(query, function(res){
		console.log(res);
	});
	
}
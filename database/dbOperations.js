var path = require('path'); 

var db = require(path.join(__dirname, "..", "database", "dbConnect.js"));

module.exports.checkItem= function(name, quantity){
	var query = "select * from kitchen where name = '" + name + "' and quantity = " + quantity + ";";
	console.log(query);
	res = db.executequery(query);
	console.log(res);
	if (res == '{}')
		return false;
	else
		return true;
}

module.exports.insertItem= function(name, quantity){
	var query = "insert into kitchen (name, quantity, created_till_now, predicted) values ('" + name + "', " + quantity + ", 0, 0);";
	console.log(query);
	res = db.executequery(query);
	console.log(res);
}
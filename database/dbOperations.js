var path = require('path'); 

var db = require(path.join(__dirname, "dbconnect.js"));

module.exports.checkItem= function(name, quantity, callback){
	var query = "select * from kitchen where name = '" + name + "';";
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

module.exports.addQuantity= function(name, quantity){
	var query = "update kitchen set quantity = quantity + " + quantity + " where name = '" + name + "';";
	console.log(query);
	db.executequery(query, function(res){
		console.log(res);
	});
}

module.exports.updatePredicted= function(name, predictedValue){
	var query = "update kitchen set predicted = " + predictedValue + " where name = '" + name + "';";
	console.log(query);
	db.executequery(query, function(res){
		console.log(res);
	});
}

module.exports.updateCreatedTillNow= function(name){
	var query = "update kitchen set created_till_now = created_till_now + 1 where name = '" + name + "';";
	console.log(query);
	db.executequery(query, function(res){
		console.log(res);
	});
}

module.exports.getKitchenTable= function(callback){
	var query = "select * from kitchen;";
	console.log(query);
	db.executequery(query, function(res){
		console.log(res);
		callback(res);
	});
}
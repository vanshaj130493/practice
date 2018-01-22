var path = require('path'); 

module.exports.menu= function(req,res){
	
	console.log("Request Received");
	res.sendFile(path.join(__dirname, 'menu.html'));
}

module.exports.placeOrder= function(req,res){
	
	console.log("Request Received");
	res.sendFile(path.join(__dirname, 'placeOrder.html'));
}

module.exports.setPredictedValue= function(req,res){
	
	console.log("Request Received");
	res.sendFile(path.join(__dirname, 'setPredictedValue.html'));
}

module.exports.KitchenDisplay= function(req,res){
	
	console.log("Request Received");
	res.sendFile(path.join(__dirname, 'KitchenDisplay.html'));
}
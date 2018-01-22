var path = require('path'); 

module.exports.execute= function(req,res){
	
	console.log("Request Received");
	res.sendFile(path.join(__dirname, 'menu.html'));
}
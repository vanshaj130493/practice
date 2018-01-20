var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path'); 

var test = require(path.join(__dirname, "resources", "test.js"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
   res.setHeader('Access-Control-Allow-Origin', "*");
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
    });

app.get("/test",test.execute);

app.listen(process.env.PORT || 8080,function(){
	console.log("Server started at port" + process.env.PORT || 8080);
	});

/*
app.listen(8080,function(){
	console.log("Server started at port " + 8080);
	});
	*/
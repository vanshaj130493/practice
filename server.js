var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path'); 

var routes = require(path.join(__dirname, "resources", "routes.js"));
var test = require(path.join(__dirname, "resources", "test.js"));
var placeOrder = require(path.join(__dirname, "resources", "placeOrder.js"));
var setPredictedValue = require(path.join(__dirname, "resources", "setPredictedValue.js"));
var doneButton = require(path.join(__dirname, "resources", "doneButton.js"));
var getKitchenDisplay = require(path.join(__dirname, "resources", "getKitchenDisplay.js"));
var downloadReport = require(path.join(__dirname, "resources", "downloadReport.js"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
   res.setHeader('Access-Control-Allow-Origin', "*");
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
    });

app.get("/", routes.menu);
app.get("/test", test.execute);
app.post("/placeOrder", placeOrder.execute);
app.post("/setPredictedValue", setPredictedValue.execute);
app.post("/doneButton", doneButton.execute);
app.get("/getKitchenDisplay", getKitchenDisplay.execute);
app.get("/KitchenDisplay", routes.KitchenDisplay);
app.get("/downloadReport", downloadReport.execute);
app.get("/placeOrderUI", routes.placeOrder);
app.get("/setPredictedValueUI", routes.setPredictedValue);

app.listen(process.env.PORT || 8080,function(){
	console.log("Server started at port " + process.env.PORT || 8080);
	});

/*
app.listen(8080,function(){
	console.log("Server started at port " + 8080);
	});
	*/
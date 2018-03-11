// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var handlebars = require('express-handlebars');
var path = require('path');
//var methodOverrides = require(method-override);


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Static directory to be served
//app.use(express.static("app/public/"));
app.use(express.static(path.join(__dirname, 'public/')));



// Set Handlebars.
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
// =============================================================
// Import routes and give the server access to them.
var routes = require("./controllers/burgersController.js");

app.use(routes);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App connected on PORT " + PORT);
});

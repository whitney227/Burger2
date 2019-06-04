var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");

//Set up Express app
var app = express();
var PORT = process.env.PORT || 3000;

//bring in models
var models = require("./models")
//sync the models
models.sequelize.sync();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controllers.js");
app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT)
});


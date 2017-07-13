// DEPENDENCIES
// =======================================================
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// SETS UP EXPRESS APP
// =======================================================
const app = express();
const PORT = 9001;


// BODYPARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

// app.use(express.static('public'));

// ROUTES
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

// LISTENER

app.listen(PORT, function(err) {
	if (err) {
		return console.error(err)
	}

	console.log("App listening on PORT " + PORT);
});
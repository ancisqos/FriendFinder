// What will Friend Finder do?
    // take in results of users' surveys,
    // compare answers with those from other users
    // display name and picture of user with best overall match

// =======================================================
// DEPENDENCIES
// =======================================================
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// =======================================================
// SETS UP EXPRESS APP
// =======================================================
const app = express();
const PORT = 9001;

// =======================================================
// FUNCTIONS
// =======================================================
function displayHome(url, req, res) {
	fs.readFile()
}

function displaySurvey(url, req, res) {
	fs.readFile()
}

// =======================================================
// BODYPARSER
// Allows server to interpret data sent to it
// =======================================================
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// =======================================================
// ROUTER
// Points our server to series of "route" files
// Gives server a kind of map for responding to visitors or request data
// =======================================================

// require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// =======================================================
// LISTENER
// Starts our server
// =======================================================

app.listen(PORT, function(err) {
	if (err) {
		return console.error(err)
	}
	console.log("App listening on PORT " + PORT);
});
// Dependencies
// =======================================================
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// Sets up Express App
// =======================================================
const app = express();

const PORT = 9001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
	type: "application/vnd.api+json"
}));

app.use(express.static('public'));

// Set up data


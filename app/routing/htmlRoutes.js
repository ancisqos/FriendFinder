const path = require("path");

module.exports = function(app) {

// Takes us to survey page when /survey is typed in URL
app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/survey.html"));
});

// If no matching route, default to home
app.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

}
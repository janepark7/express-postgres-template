const Express = require("express");
const bodyParser = require("body-parser");
const app = Express();

//	Handles post requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//	Render views using EJS
app.set("view engine", "ejs");


const port = process.env.PORT || 3000;
app.listen(port, function() {
	console.log("Listening on port " + port);
});

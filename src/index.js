const Express = require("express");
const Mongoose = require("mongoose");
const BodyParser = require("body-parser");

const info = require("../package.json");
const personRoutes = require("./routes/person");
const carRoutes = require("./routes/car");

const app = Express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

// set up Mongoose connection
Mongoose.connect("mongodb://localhost/personsdb", { useNewUrlParser: true });

// Root "/" page. 
app.get("/",(request, response) => {
   response.json({version: info.version});
});
// Persons routes
personRoutes(app);
// Cars routes
carRoutes(app);

app.listen(3000, () => {
    console.log("listeninig at :3000 ...")
});









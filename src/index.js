const Express = require("express");
const Mongoose = require("mongoose");
const BodyParser = require("body-parser");

var app = Express();
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

// set up Mongoose connection
Mongoose.connect("mongodb://localhost/personsdb", { useNewUrlParser: true });


    // and point 
app.get("/",(request, response) => {

   response.send("hi hamdi");

});
    app.post("/person", async (request, response) => {
    try {
        let result = await personModel.find().exec();
        response.send(result)
    } catch (error) {
        response.status(500).send(error)

    }
});
app.get("/people", async (request, response) => {
    try {
        let result = await personModel.find().exec();
        response.send(result);
    } catch (error) {
        response.status(500).send(error)

    }
});
app.get("/person/:id", async (request, response) => {
    try {
        const person = await personModel.findById(request.params.id).exec();
        response.send(person)
    } catch (error) {
        response.status(500).send(error)
    }
});
app.put("/person/:id", async (request, response) => {
    try {
        let person = await personModel.findById(request.params.id).exec();
        response.set(request.person);
        let result = await person.save();
        response.send(result);
    } catch (error) {
        response.status(500).send(error)
    }

});
app.delete("/person/:id", async (request, response) => {
    try {
        let result = await personModel.deleteOne({ _id: request.params.id }).exec();
        response.set(request.person);
    } catch{
        response.status(500).send(error)
    }


});

app.listen(3000, () => {
    console.log("listeninig at :3000 ...")
});









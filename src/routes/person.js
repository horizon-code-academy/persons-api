const personModel = require("../models/person")
const carModel = require("../models/car").model

module.exports = (router) => {
    // Create person end-point 
    router.post("/person", async (request, response) => {
        try {
            const newPerson = new personModel(request.body);
            let result = await newPerson.save();
            response.send(result)
        } catch (error) {
            response.status(500).send(error)

        }
    });

    // Get persons list end-point 
    router.get("/people", async (request, response) => {
        try {
            let result = await personModel.find().populate({path: 'car', model: carModel}).exec();
            response.send(result);
        } catch (error) {
            response.status(500).send(error)

        }
    });

    // Get persons list paginated end-point 
    router.get("/people/:pagenum", (request, response) => {
        personModel.paginate({}, { page: request.params.pagenum, limit: 3 })
            .then((result) => {
                response.send(result);
            })
            .error((error) => {
                response.status(500).send(error)
            })
    });

    // Get person end-point
    router.get("/person/:id", async (request, response) => {
        try {
            const person = await personModel.findById(request.params.id).exec();
            response.send(person)
        } catch (error) {
            response.status(500).send(error)
        }
    });

    // Update person end-point
    router.put("/person/:id", async (request, response) => {
        try {
            let oldPerson = await personModel.findById(request.params.id).exec();
            oldPerson.name.last = oldPerson.name.last.toUpperCase();
            let updatedPerson = await oldPerson.save();
            response.send(updatedPerson);
        } catch (error) {
            response.status(500).send(error)
        }

    });

    // Delete person end-point
    router.delete("/person/:id", async (request, response) => {
        try {
            let result = await personModel.deleteOne({ _id: request.params.id }).exec();
            response.send("Person Deleted");
        } catch{
            response.status(500).send(error)
        }
    });
}
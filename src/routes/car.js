const carModel = require("../models/car")

module.exports = (router) => {
    // Create car end-point 
    router.post("/car", async (request, response) => {
        try {
            let result = await carModel.find().exec();
            response.send(result)
        } catch (error) {
            response.status(500).send(error)

        }
    });

    // Get cars list end-point 
    router.get("/people", async (request, response) => {
        try {
            let result = await carModel.find().exec();
            response.send(result);
        } catch (error) {
            response.status(500).send(error)

        }
    });

    // Get car end-point
    router.get("/car/:id", async (request, response) => {
        try {
            const car = await carModel.findById(request.params.id).exec();
            response.send(car)
        } catch (error) {
            response.status(500).send(error)
        }
    });

    // Update car end-point
    router.put("/car/:id", async (request, response) => {
        try {
            let car = await carModel.findById(request.params.id).exec();
            response.set(request.car);
            let result = await car.save();
            response.send(result);
        } catch (error) {
            response.status(500).send(error)
        }

    });

    // Delete car end-point
    router.delete("/car/:id", async (request, response) => {
        try {
            let result = await carModel.deleteOne({ _id: request.params.id }).exec();
            response.set(request.car);
        } catch{
            response.status(500).send(error)
        }
    });
}
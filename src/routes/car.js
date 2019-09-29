const carModel = require("../models/car").model

module.exports = (router) => {
    // Create car end-point 
    router.post("/car", async (request, response) => {
        try {
            const newCar = new carModel(request.body);
            let result = await newCar.save();
            response.send(result)
        } catch (error) {
            response.status(500).send(error)

        }
    });

    // Get cars list end-point 
    router.get("/cars", async (request, response) => {
        try {
            let result = await carModel.find().exec();
            response.send(result);
        } catch (error) {
            response.status(500).send(error)

        }
    });

    // Get cars list paginated end-point 
    router.get("/cars/:pagenum", (request, response) => {
        carModel.paginate({}, { page: request.params.pagenum, limit: 3 })
            .then((result) => {
                response.send(result);
            })
            .error((error) => {
                response.status(500).send(error)
            })
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
            let oldCar = await carModel.findById(request.params.id).exec();
            oldCar.name.last = oldCar.name.last.toUpperCase();
            let updatedCar = await oldCar.save();
            response.send(updatedCar);
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
const mongoose = require("mongoose")
const paginate = require("mongoose-paginate")

// Car schema
const carSchema = new mongoose.Schema({
    model: { type: String, required: true },
    brand: { type: String, required: true },
    year: Number,
    color: String
},
    // Optional createAt and updateAt fields.
    {
        timestamps: true,
    }
)

// Plugin to paginate persons list.
carSchema.plugin(paginate);

// Car model 
const carModel = mongoose.model("car", carSchema)  

// Car Schema & Model export 
module.exports = {schema: carSchema, model: carModel}
 
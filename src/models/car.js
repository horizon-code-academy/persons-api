const mongoose = require("mongoose")

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

// Car model 
module.exports = mongoose.model("car", carSchema)   
const mongoose = require("mongoose")
const paginate = require("mongoose-paginate")

const ObjectId = mongoose.Schema.Types.ObjectId

// Import car schema
const carSchema = require('./car').schema

// Person schema
const personSchema = new mongoose.Schema({
    name: {
        first: { type: String, required: true },
        last: { type: String, required: true }
    },
    occupation: String,
    likes: Array,
    email: { type: String, minlength: 5, maxlength: 256 },
    age: { type: Number, min: 18, max: 65 },
    gender: { type: String, enum: ["male", "female"] },
    contry: { type: String, default: "TN" },
    car: { type: ObjectId, ref: "Car" },
},
    // Optional createAt and updateAt fields.
    {
        timestamps: true,
    });

// Plugin to paginate persons list.
personSchema.plugin(paginate);

// export Person model 
module.exports = mongoose.model("person", personSchema)


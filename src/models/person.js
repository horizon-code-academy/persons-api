// importation de fichier car 
const carSchema = require('./car')

// schema

const personSchema = new mongoose.Schema({
    name: {
        first: { type: String, required: true },
        last: { type: String, required: true }
    },
    occupation : String,
    likes:Array,
    email: { type: String, minlength: 5, maxlength: 256 },
    phone: { type: Number, min: 18, max: 65 },
    gender: { type: String, enum: ["male", "female"] },
    contry: { type: String, default: "TN" },
    car: carSchema,

},
    // optionel mongoos assgns createAt and updateAt
    {
        timestamps: true,
    });
// model 
module.exports = mongoose.model("person", personSchema)


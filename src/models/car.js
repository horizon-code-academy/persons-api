// schema

const carSchema = new mongoose.Schema({
    model: { type: String, required: true },
    brand: { type: String, required: true },
    year: Number,
    color: String
},
    // optionel mongoos assgns createAt and updateAt
    {
        timestamps: true,
    }
)
// model 
module.exports = mongoose.model("car", carSchema)   
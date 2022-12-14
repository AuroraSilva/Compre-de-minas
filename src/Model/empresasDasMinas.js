const mongoose = require('mongoose');

const companiesSchema = new mongoose.Schema(
    {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            default: mongoose.Types.ObjectId
        },
        Name: {
            type: String, 
            required: true,
        },
        Location: {
            type: String, 
            required: true
        },
        Type: {
            type: String,
            required: true
        },
        Contact: {
            type: String, 
            required: true
        },
        Bio: {
            type: String,
            required: true,
            default: "None available at the moment"
        }},
        {timestamp: true}
);
const model = mongoose.model("Empresas", companiesSchema);

module.exports = model;
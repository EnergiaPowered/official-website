const mongoose = require("mongoose");

const infoSchema = new mongoose.Schema({
    address: "string",
    email: "string",
    phone: "string",
    image: "string"
});

module.exports = mongoose.model("Info", infoSchema, 'info');
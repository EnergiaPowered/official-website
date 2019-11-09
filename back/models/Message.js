const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    name: "string",
    email: "string",
    message: "string"
});

module.exports = mongoose.model("Message", messageSchema);
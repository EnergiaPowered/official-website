const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title: String,
    body: String,
    Category: String,
    image_url: String
});

module.exports = mongoose.model("Blog", blogSchema);
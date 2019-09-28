const mongoose = require("mongoose");

function connectToDB() {
  mongoose
    .connect("mongodb://localhost:27017/helloworld", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => console.log("****connected to MongoDB****"))
    .catch(err => console.log("failed to connect to mongoDB", err));
}

module.exports = connectToDB;

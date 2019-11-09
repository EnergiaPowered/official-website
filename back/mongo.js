const mongoose = require("mongoose");

function connectToDB() {
  mongoose
    .connect("mongodb+srv://ep20it:dT%24v%21RozlC2v26E@website-dkccu.mongodb.net/website?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => console.log("****connected to MongoDB****"))
    .catch(err => console.log("failed to connect to mongoDB", err));
}

module.exports = connectToDB;

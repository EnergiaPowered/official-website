const mongoose = require("mongoose");
const DBConfig = require('./config/db');


function connectToDB() {
  mongoose
    .connect(DBConfig.DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => console.log("****connected to MongoDB****"))
    .catch(err => console.log("failed to connect to mongoDB", err));
}

module.exports = connectToDB;

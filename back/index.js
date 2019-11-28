const express = require("express");
const cors = require("cors");
const app = express();

// connect to DB
const db = require("./mongo");
db();

// Importing Routes
const contactInfo = require("./routes/contactInfo");
const message = require("./routes/message.js");

// parse the body of the request
app.use(express.json());

//enable cors
app.use(cors());

// production configurations
if (process.env.NODE_ENV === "production") {
  // assets
  app.use(express.static(path.join(__dirname, "public")));

  // always send the index.html file to handle SPA
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
  });
}

// disable the X-Powered-By header instead of using helmet
app.disable("x-powered-by");

// Router MiddleWares
app.use(contactInfo);
app.use(message);

// listen to specific port
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening to port ${port}`));

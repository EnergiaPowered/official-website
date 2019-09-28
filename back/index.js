const express = require("express");

const app = express();

// connect to DB
const db = require("./mongo");
db();

// parse the body of the request
app.use(express.json());

// production configurations
if (process.env.NODE_ENV === "production") {
  // assets
  app.use(express.static(path.join(__dirname, "public")));

  // always send the index.html file to handle SPA
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
  });
}

app.get("/", (req, res) => {
  res.send("Hello From Backend");
});

// listen to specific port
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listining to port ${port}`));

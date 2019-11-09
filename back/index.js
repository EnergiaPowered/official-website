const express = require("express");
const cors = require("cors");
const app = express();

// connect to DB
const db = require("./mongo");
db();

// Importing models
const Message = require("./models/Message");
const Info = require("./models/Info");

// parse the body of the request
app.use(express.json());

//enabeling cors
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

app.get("/", (req, res) => {
    res.send("Hello From Backend");
});

// Retrieve contacts info
app.get("/contactInfo", (req, res) => {
    Info.find({}, (err, docs) => {
        if (err) {
          console.log(err);
          return res.sendStatus(500);
        }
        res.status(200).send(docs[0]);
    });
});

// Recieve messages from the user
app.post("/message", (req, res) => {
    // your code here
    if (req.body && req.body !== {}) {
        let newMessage = new Message(req.body);
        newMessage.save((err, mess) => {
            if (err) {
                console.log(err);
                return res.status(500).send(err);
            }
            console.log(mess);
            res.sendStatus(200);
        });
    } else res.sendStatus(500);
});

// listen to specific port
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listining to port ${port}`));

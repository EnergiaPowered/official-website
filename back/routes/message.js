const express = require("express");
const router = express.Router();

// Importing Model
const Message = require("../models/Message");

// Recieve messages from the user
router.post("/message", (req, res) => {
  if (req.body && req.body !== {}) {
    let newMessage = new Message(req.body);
    newMessage.save((err, mess) => {
      if (err) {
        console.log(err);
        return res.status(500).send(err);
      }
      res.sendStatus(200);
    });
  } else res.sendStatus(500);
});

module.exports = router;

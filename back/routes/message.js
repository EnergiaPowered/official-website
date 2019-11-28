const express = require("express");
const router = express.Router();
const { checkSchema, validationResult } = require("express-validator");
// Importing Model
const Message = require("../models/Message");

// Defining a Checking Schema for the Message Body
const messageCheckSchema = checkSchema({
  name: {
    isString: true,
    exists:{
      options: {
        checkFalsy: true
      }
    },
    rtrim: true,
    escape: true
  },
  email: {
    isEmail: true,
    exists:{
      options: {
        checkFalsy: true
      }
    },
    rtrim: true,
    normalizeEmail: true,
    escape: true
  },
  message: {
    isString: true,
    exists:{
      options: {
        checkFalsy: true
      }
    },
    rtrim: true,
    escape: true
  }
});

// Receive messages from the user w/ validation and sanitization
router.post("/message", messageCheckSchema, (req, res) => {
  try {
    if (req.body && req.body !== {}) {    
      validationResult(req).throw();
      let newMessage = new Message(req.body);
      newMessage.save((err, mess) => {
        if (err) {
          console.log(err);
          return res.status(500).send(err);
        }
        res.sendStatus(200);
      });
    } else res.sendStatus(400);
  } catch (err) {
    res.status(400).send(err.mapped());
  }
});

module.exports = router;

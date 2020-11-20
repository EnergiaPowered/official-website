const express = require("express");
const router = express.Router();
router.use(express.json());
// joi Validation
const Joi = require('joi');
// Importing Model
const Event = require("../models/Event");
const auth = require("../middleware/auth")
const admin = require("../middleware/admin")

// Defining a Checking schema for the Event Body
const eventsSchema = Joi.object({
  name: Joi.string()
    .required(),

  date: Joi.date()
    .greater('1-1-2019'),

  status: Joi.string()
    .required()
    .valid('Closed', 'Soon', 'Opened'),

  eventDescription: Joi.string()
    .required(),

  eventLocation: Joi.string()
    .required(),

  eventOrganizer: Joi.string()
    .required()

})

// CRUD Operations routing of event
router.get("/events", (req, res) => {
  try {
    Event.find({})
      .then((events) => {
        res.send(events);
      });
  } catch (err) {
    console.log(err.message);
    res.sendStatus(500);
  }
});

router.post("/events",[auth,admin], (req, res) => {
  result = eventsSchema.validate(req.body)
  if (result.error) {
    console.log(result.error.message);
    res.sendStatus(400);
    return;
  }
  let newEvent = new Event(req.body);
  newEvent.save();
  res.send(JSON.stringify(newEvent));
});

router.put("/events/:id",[auth,admin], (req, res) => {
  result = eventsSchema.validate(req.body)
  if (result.error) {
    console.log(result.error.message);
    res.sendStatus(400);
    return;
  }

  try {
    Event.findByIdAndUpdate({ _id: req.params.id },
      {
        $set: req.body
      })
      .then((event) => {
        res.send(event);
      });
  } catch (err) {
    console.log(err.message);
    res.sendStatus(500);
  }
});

router.delete("/events/:id",[auth,admin], (req, res) => {
  try {
    Event.findByIdAndRemove(req.params.id, (err, event) => {
      if (err) throw err;
      if (event == null) {
        res.sendStatus(404);
      }
      else {
        res.send(JSON.stringify(event))
      }
    });
  } catch (err) {
    console.log(err.message);
    res.sendStatus(500);
  }
});

module.exports = router;
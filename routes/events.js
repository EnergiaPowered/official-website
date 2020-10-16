const express = require("express");
const { validationResult } = require("express-validator");
const router = express.Router();
router.use(express.json());
// joi Validation
const Joi = require('joi');
// Importing Model
const Event = require("../models/Event");


// Defining a Checking Schema for the Event Body

const schema = Joi.object({
  name: Joi.string()
  .required(),

  date: Joi.date()
  .greater('1-1-2019'),

  status: Joi.string()
  .required()
  .valid('closed', 'soon', 'opened'),

  eventDescription: Joi.string()
  .required(),

  eventLocation: Joi.string()
  .required(),

  eventOrganizer: Joi.string()
  .required()
  
})

// CRUD Operations routing of event 

router.get("/",(req,res)=>{

try{
  const events = Event.find({})
  .then((e) =>{  res.send(e);
  });
}
catch (err){
  console.log(err.message);
  res.sendStatus(500);
}  


});

router.post("/",(req,res)=>{

  result = schema.validate(req.body)
  if (result.error){
    console.log(result.error.message);
    res.sendStatus(400);
    return;
  }
  let newEvent = new Event(req.body);
  newEvent.save();
  res.send(JSON.stringify(newEvent))  ;

});

router.put("/:id",(req,res)=>{

  result = schema.validate(req.body)
  if (result.error){
    console.log(result.error.message);
    res.sendStatus(400);
    return;
  }

  try{
    let event = Event.findByIdAndUpdate({ _id: req.params.id },
      {$set: req.body
      })
      .then((e) =>{  res.send(e);
      });


  }
  catch (err){
    console.log(err.message);
    res.sendStatus(404);
  }  

});

router.delete("/:id",(req,res)=>{

  try{
    const event = Event.findByIdAndRemove(req.params.id, (err, event) => { 
      if (event == null){ 
        res.sendStatus(404);
      } 
      else{ 
          res.send(JSON.stringify(event))
          
      } 

    });


  }
  catch (err){
    console.log(err.message);
    res.sendStatus(404);
  }  

});

module.exports = router;
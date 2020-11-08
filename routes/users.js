const { User, validate } = require('../models/User');
const _ = require('lodash');
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const Joi = require('joi');
const passwordComplexity = require('joi-password-complexity');
const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();

router.use(express.json())

// get info about the user from his JWT Token
router.get("/me", auth, async (req, res) => {
  const user = await User.findById(req.user._id).select("-password -__v -_id");
  
  res.send(user);
});

//	Creating a new user
router.post("/users", async (req, res) => {
  const { error } = validate(req.body);
  if(error) return res.status(400).send(error.details[0].message);
  
  let user = await User.findOne({ email: req.body.email });
  if(user) return res.status(400).send('User already registered.');
  
  user = new User(_.pick(req.body, ['name', 'email', 'password','isAdmin']));

  // hashing password
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  await user.save();
  
  // return response the token and user properties
  const token = user.generateAuthToken();
  res.header('x-auth-token', token).send(_.pick(user, ['_id', 'name', 'email']));
});


function validate_update(user){
  const schema = Joi.object({
	  password: passwordComplexity({
		  min: 8,
		  max: 1024,
		  lowerCase: 1,
		  upperCase: 1,
		  numeric: 1,
		  symbol: 0,
		  requirementCount: 4
    }),
    name : Joi.string().min(5),
    isAdmin : Joi.boolean()
    
  });
  return schema.validate(user);
};


router.put("/users", auth, async (req, res) => {
  const { error } = validate_update(req.body);
  if(error) return res.status(400).send(error.details[0].message);

  // get id of the user from his JWT Token 
  let user = await User.findById(req.user._id);

  if(!req.body.password){
    user.name = req.body.name;
    // return response the token and user properties
    await user.save();
    const token = user.generateAuthToken();
    return res.header('x-auth-token', token).send(_.pick(user, ['_id', 'name', 'email']));

  }
  else{
    user.name = name;
    user.password = req.body.password;
  // hashing password
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  await user.save();
  // return response the token and user properties
  const token = user.generateAuthToken();
  return  res.header('x-auth-token', token).send(_.pick(user, ['_id', 'name', 'email']));
  }


  

});


router.delete("/users", auth, async (req, res) => {
  try {
      User.findByIdAndRemove(req.user._id, (err, user) => {
      if (err) throw err;
      if (user == null) {
        res.sendStatus(404);
      }
      else {
        res.send(user.name + " has been Deleted")
      }
    });
  } catch (err) {
    console.log(err.message);
    res.sendStatus(500);
  }

});
module.exports = router;
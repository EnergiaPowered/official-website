const mongoose = require('mongoose');
const config = require('config');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const passwordComplexity = require('joi-password-complexity');
// user database schema
const userSchema = new mongoose.Schema({
  name: {
	  type: String,
	  required: true,
	  minlength: 5,
  },
  email: {
	  type: String,
	  required: true,
	  minlength: 5,
	  maxlength: 255,
	  unique: true
  },
  password: {
	  type: String,
	  required: true,
	  minlength: 8,
	  maxlength: 1024
  },
  isAdmin: {
	  type: Boolean,
	 default : false
  }

});

// function to generate the token with PAYLOAD
userSchema.methods.generateAuthToken = function(){
  payload =	{ _id: this._id , isAdmin : this.isAdmin };
  const token = jwt.sign(payload, config.get('jwtPrivateKey'));
  return token;
};

const User = mongoose.model('User', userSchema);

// Defining a Checking Schema for the User Body


  exports.User = User;
  exports.validate = function (user){
    const schema = Joi.object({
        name : Joi.string().min(5).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: passwordComplexity({
            min: 8,
            max: 1024,
            lowerCase: 1,
            upperCase: 1,
            numeric: 1,
            symbol: 0,
            requirementCount: 4
        }).required(),
        isAdmin : Joi.boolean()

    });
    return schema.validate(user);
  };
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date,
		required: true,
	},
	status: {
		type: String,
		required: true,
		enum: ['closed', 'soon', 'opened'],
	},
	eventDescription:{
		type: String,
		required: true,
	},
	eventLocation:{
		type: String,
		required: true,
	},
	eventOrganizer:{
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("Event", eventSchema);
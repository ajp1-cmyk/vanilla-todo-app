const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
	title: {
		type:String,
		required: true
	},
	content: {
		type:String,
		required: true
	}
});

const TodoModel = mongoose.models.Todo || mongoose.model('Todo',todoSchema);

module.exports = TodoModel;

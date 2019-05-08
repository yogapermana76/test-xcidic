const mongoose = require('mongoose')
const Schema = mongoose.Schema

const taskSchema = new Schema({
  title: String,
  description: String,
  status: Boolean,
  date: Date,
  userId: { 
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task
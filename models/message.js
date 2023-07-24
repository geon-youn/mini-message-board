const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const messageSchema = new Schema({
  text: { type: String, required: true },
  author: { type: String, required: true },
  added: { type: Date, required: true },
});

module.exports = mongoose.model('Message', messageSchema);

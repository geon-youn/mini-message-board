const express = require('express');
const router = express.Router();

require('dotenv').config();

const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const mongoDB = process.env.mongoDB;
const Message = require('../models/message');
let messages;

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}

/* GET home page. */
router.get('/', async function (req, res, next) {
  messages = await Message.find();
  res.render('index', { messages });
});

router.post('/new', function (req, res, next) {
  Message.create({
    text: req.body.message,
    author: req.body.author,
    added: new Date(),
  });
  res.redirect('/');
});

module.exports = router;

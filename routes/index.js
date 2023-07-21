var express = require('express');
var router = express.Router();

const textMessage = (text, user, added) => {
  return {
    text,
    user,
    added,
  };
};

const messages = [
  textMessage('Hi There!', 'Amando', new Date()),
  textMessage('Hello World!', 'Charles', new Date()),
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { messages });
});

router.post('/new', function (req, res, next) {
  messages.push(textMessage(req.body.message, req.body.author, new Date()));
  res.redirect('/');
});

module.exports = router;

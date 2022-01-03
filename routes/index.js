var express = require('express');
var router = express.Router();
var format = require('date-fns/format');

const messages = [
  {
    text: "What's going on?",
    user: 'Craig',
    added: format(new Date(), 'yyyy-MM-dd, hh:mm'),
  },
  {
    text: 'Hello World!',
    user: 'Bob',
    added: format(new Date(), 'yyyy-MM-dd, hh:mm'),
  },
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Message Board', messages });
});

router.post('/new', (req, res, next) => {
  const newMessage = {
    text: req.body.message === '' ? 'Empty Message' : req.body.message,
    user: req.body.user === '' ? 'Anonymous' : req.body.user,
    added: format(new Date(), 'yyyy-MM-dd, hh:mm'),
  };

  messages.push(newMessage);

  res.redirect('/');
});

module.exports = router;

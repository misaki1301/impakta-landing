var express = require('express');
var router = express.Router();
const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service:'gmail',
  auth:{
    user:'impaktaperu.assistant@gmail.com',
    pass:'tufiesta1415'
  }
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/send-email', function (req, res) {
  console.log(req.body);
  const mailOptions = {
    from: req.body.inputEmail,
    to: 'paul.frankpc@gmail.com',
    subject:'Checkin',
    html:'<p>Saludos GIl</p>'
  };
  transporter.sendMail(mailOptions,function (err, info) {
    if (err){
      console.error(err);
    } else {
      console.log(info);
    }
  });
  res.redirect('/');
});

module.exports = router;

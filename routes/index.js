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
    to: 'jaime2miguell@gmail.com',
    subject:'Consulta de'+req.body.inputName,
    html:'<p>'+req.body.inputMessage+'</p><br>' +
        '<p>Si deseas contactarlo llamalo al:'+req.body.inputPhone+'</p><br>' +
        '<p>Su correo:'+req.body.inputEmail+'</p>' +
        '<hr>' +
        '<p>El equipo de Impakta Perú</p>'
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

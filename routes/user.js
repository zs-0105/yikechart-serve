var express = require('express');
var router = express.Router();
var {
  emailSignUp
} = require('../service/emailServer')
// console.log(emailSignUp);
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/mail', function (req, res) {
  let mail = req.body.mail
  console.log(res.sendResult);
  emailSignUp(mail, res)
})
module.exports = router;
var nodemailer = require('nodemailer')

var credentails = require('../config/credentails')

var transporter = nodemailer.createTransport({
    service: 'qq',
    auth: {
        user: credentails.qq.user,
        pass: credentails.qq.pass
    }
})

exports.emailSignUp = function (email, res) {
    let options = {
        from: '1641523731@qq.com',
        to: email,
        subject: '感谢你在yiki注册',
        html: '<span>yiki欢迎您的加入!</span><a href="http://localhost:8080/">点击加入</a>'
    }

    transporter.sendMail(options, function (err, msg) {
        if (err) {
            res.rendResult(null, 500, err)
            console.log(err);
        } else {
            res.sendResult(null, 200, '邮箱发送成功!')
            console.log('邮箱发送成功!');
        }
    })
}
var bcrypt = require('bcryptjs')

// 生成hash密码
exports.encryption = function (e) {
    let salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(e, salt);
    return hash
}

// 解密
exports.decryption = function (e, hash) {
    let verify = bcrypt.compareSync(e, hash);
    return verify
}
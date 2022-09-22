module.exports = function (req, res, next) {
    res.sendResult = function (data, code, message) {
        const fmt = req.query.fmt ? res.query.fmt : 'rest'
        if (fmt === 'rest') {
            res.json({
                "data": data,
                "meta": {
                    "msg": message,
                    "status": code
                }
            });
        }
    }
    next()
}
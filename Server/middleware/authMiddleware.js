const jwt=require('jsonwebtoken')


module.exports = function (res, req, next) {


    if (req.method === "OPTIONS") {
        return next()
    }
    try {
        const token = req.headers.authorization.split('')[1]// Bearer asfadfjivrjv
        if (!token) {
            return res.status(401).json({ message: "Не авторизован" })
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
    }
    catch (e) {
        res.status(401).json({ message: "Не авторизован" })
    }
}
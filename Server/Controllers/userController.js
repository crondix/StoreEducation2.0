// const { where } = require('sequelize');
const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const { User, Basket } = require('../Models/Models');
const jwt = require('jsonwebtoken');
// const { where } = require('sequelize');


const generateJwt = (id, email, role) => {
  return jwt.sign(
    { id, email, role },
    process.env.SECRET_KEY,
    { expiresIn: '24h' }
  )
}
class UserController {
  async registration(req, res, next) {
    const { email, password, role } = req.body
    if (!email || !password) {
      return next(ApiError.badRequest('Некорректный email или password'))
    }
    const candidate = await User.findOne({ where: { email } })
    if (candidate) {
      return next(ApiError.badRequest('Пользователь стаким email уже существует'))
    }
    const hashPassword = await bcrypt.hash(password, 5)
    const user = await User.create({ email, role, password: hashPassword })
    const basket = await Basket.create({ userId: user.id })
    const token = generateJwt(user.id, user.email, user.role)
    return res.json({ token })
  }
  async login(req, res, next) {
    const { email, password } = req.body
    const user = await User.findOne({where:{email}})
    if(!user){
      return next(ApiError.internal('пользователь с таким именем не найден'))
    }
    let comparePassword = bcrypt.compareSync(password, user.password)
    if(!comparePassword){
      return next(ApiError.internal('Неверный пароль'))
    }
    const token = generateJwt(user.id, user.email, user.role)
    return res.json({token})
  }
  async check(req, res, next) {
  
    res.json({message:"ALL Right"});
  }
}

module.exports = new UserController()
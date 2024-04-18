const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt')
class UserController {
  async registration(req, res) {
    const { email, password, role } = req.body
    if (email) {

    }
  }
  async login(req, res) {

  }
  async check(req, res, next) {
    const id = req.query.id;
    if (!id) {
      return next(ApiError.badRequest('Не задано ID'));
    }
    res.json(id);
  }
}

module.exports = new UserController()
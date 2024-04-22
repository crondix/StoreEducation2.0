const {Type} = require('../Models/Models')
const ApiError = require('../error/ApiError');

class BasketController {
    async create(req, res) {
        const {user_id} = req.body
        const type = await Type.create({user_id})
        return res.json(type)
    }

    async getAll(req, res) {
        const types = await Type.findAll()
        return res.json(types)
    }

}

module.exports = new BasketController()
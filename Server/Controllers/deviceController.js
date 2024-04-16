class DeviceController {
    async create(req, res) {
        const { name, price, brandId, typeId, info } = req.body
        const { img } = req.file
    }
    async getAll(req, res) {

    }

    async getOne(req, res) {

    }
}

module.exports = new DeviceController()
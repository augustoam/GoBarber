const { User } = require('../models')

class AppointmentController {
  async create(req, res) {
    const provider = await User.findByPk(req.params.provider)

    return res.render('appointments/create')
  }
}

module.exports = new AppointmentController()

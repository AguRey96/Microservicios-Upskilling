const Planets = require("../Data")
const { response } = require("../Utils")

module.exports = async (req, res) => {
  const { id } = req.params
  const data = req.body
  await Planets.update(id, data)
  response(res, 200, data)
}

const Planets = require("../Data")
const { response } = require("../Utils")

module.exports = async (req, res) => {
  const { id } = req.params
  const planet = await Planets.delete(id)
  response(res, 200, planet)
}

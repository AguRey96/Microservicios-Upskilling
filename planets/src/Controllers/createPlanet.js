const Planets = require("../Data")
const { response } = require("../Utils")

module.exports = async (req, res) => {
  const data = req.body
  const newPlanet = await Planets.create(data)
  response(res, 201, newPlanet)
}

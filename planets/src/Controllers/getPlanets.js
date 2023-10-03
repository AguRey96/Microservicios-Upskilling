const Planets = require("../Data")
const { response } = require("../Utils")

module.exports = async (req, res) => {
  const planets = await Planets.list()
  response(res, 200, planets)
}

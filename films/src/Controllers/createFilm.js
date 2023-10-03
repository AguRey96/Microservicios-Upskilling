const Films = require("../Data")
const { response } = require("../Utils")

module.exports = async (req, res) => {
  const data = req.body
  const newFilm = await Films.create(data)
  response(res, 201, newFilm)
}

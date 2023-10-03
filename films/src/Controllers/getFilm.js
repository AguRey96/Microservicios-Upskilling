const Films = require("../Data")
const { response } = require("../Utils")

module.exports = async (req, res) => {
  const { id } = req.params
  const film = await Films.get(id)
  response(res, 200, film)
}

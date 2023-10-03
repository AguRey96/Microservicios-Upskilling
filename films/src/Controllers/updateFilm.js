const Films = require("../Data")
const { response } = require("../Utils")

module.exports = async (req, res) => {
  const { id } = req.params
  const data = req.body
  await Films.update(id, data)
  response(res, 200, data)
}

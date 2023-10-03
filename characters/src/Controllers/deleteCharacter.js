const Character = require("../Data")
const { response } = require("../Utils")

module.exports = async (req, res) => {
  const { id } = req.params
  const character = await Character.delete(id)
  response(res, 200, character)
}

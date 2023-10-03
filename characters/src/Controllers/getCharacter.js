const Character = require("../Data")
const { response } = require("../Utils")

module.exports = async (req, res) => {
  const { id } = req.params
  const character = await Character.get(id)
  response(res, 200, character)
}

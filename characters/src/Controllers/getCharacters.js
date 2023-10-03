const Characters = require("../Data")
const { response } = require("../Utils")

module.exports = async (req, res) => {
  const characters = await Characters.list()
  response(res, 200, characters)
}

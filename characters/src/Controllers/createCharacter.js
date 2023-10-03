const Characters = require("../Data")
const { response } = require("../Utils")

module.exports = async (req, res) => {
  const data = req.body
  await Characters.create(data)
  response(res, 200, data)
}

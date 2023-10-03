const Films = require("../Data")
const { response } = require("../Utils")

module.exports = async (req, res) => {
  const films = await Films.list()
  response(res, 200, films)
}

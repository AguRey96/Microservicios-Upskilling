const { ClientError } = require("../Utils/Errors")

module.exports = (req, res, next) => {
  const { name } = req.body
  if (name) return next()
  else throw new ClientError("Falta nombre", 401)
}

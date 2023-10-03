const { ClientError } = require("../Utils/Errors")

module.exports = (req, res, next) => {
  const { title } = req.body
  if (title) return next()
  else throw new ClientError("Falta title", 401)
}

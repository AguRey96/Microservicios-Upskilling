const { ClientError } = require("../Utils/Errors")

module.exports = (req, res, next) => {
  const { name } = req.body
  if (name) return next()
  else throw new ClientError("Error al crear personaje, faltan datos", 401)
}

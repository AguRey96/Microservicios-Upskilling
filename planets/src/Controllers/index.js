const { catchedAsync } = require("../Utils")

module.exports = {
  getPlanets: catchedAsync(require("./getPlanets")),
  getPlanet: catchedAsync(require("./getPlanet")),
  createPlanet: catchedAsync(require("./createPlanet")),
  updatePlanet: catchedAsync(require("./updatePlanet")),
  deletePlanet: catchedAsync(require("./deletePlanet")),
}

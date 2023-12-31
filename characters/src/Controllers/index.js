const { catchedAsync } = require("../Utils")

module.exports = {
  getCharacters: catchedAsync(require("./getCharacters")),
  getCharacter: catchedAsync(require("./getCharacter")),
  createCharacter: catchedAsync(require("./createCharacter")),
  deleteCharacter: catchedAsync(require("./deleteCharacter")),
  updateCharacter: catchedAsync(require("./updateCharacter")),
}

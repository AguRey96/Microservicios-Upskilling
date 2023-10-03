const { catchedAsync } = require("../Utils")

module.exports = {
  getFilms: catchedAsync(require("./getFilms")),
  getFilm: catchedAsync(require("./getFilm")),
  createFilm: catchedAsync(require("./createFilm")),
  deleteFilm: catchedAsync(require("./deleteFilm")),
  updateFilm: catchedAsync(require("./updateFilm")),
}

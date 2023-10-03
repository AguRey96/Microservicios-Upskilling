const { Router } = require("express")

const router = Router()

const controllers = require("../Controllers")
const Middlewares = require("../Middlewares")

router.get("/", controllers.getFilms)
router.get("/:id", controllers.getFilm)

router.post("/", Middlewares.filmValidation, controllers.createFilm)
router.put("/:id", controllers.updateFilm)

router.delete("/:id", controllers.deleteFilm)

module.exports = router

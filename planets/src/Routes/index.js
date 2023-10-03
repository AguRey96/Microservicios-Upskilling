const { Router } = require("express")

const router = Router()

const controllers = require("../Controllers")
const Middlewares = require("../Middlewares")

router.get("/", controllers.getPlanets)
router.get("/:id", controllers.getPlanet)

router.post("/", Middlewares.planetValidation, controllers.createPlanet)
router.put("/:id", controllers.updatePlanet)

router.delete("/:id", controllers.deletePlanet)

module.exports = router

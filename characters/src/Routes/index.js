const { Router } = require("express")

const router = Router()

const controllers = require("../Controllers")
const Middlewares = require("../Middlewares")

router.get("/", controllers.getCharacters)
router.get("/:id", controllers.getCharacter)

router.post("/", Middlewares.characterValidation, controllers.createCharacter)
router.put("/:id", controllers.updateCharacter)

router.delete("/:id", controllers.deleteCharacter)

module.exports = router

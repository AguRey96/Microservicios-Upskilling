const { Router } = require("express")

const store = require("../database")
const { modelValidation } = require("../middlewares")

const router = Router()

router.get("/:model", modelValidation, async (req, res) => {
  let { model } = req.params
  const response = await store[model].list()
  res.status(200).json(response)
})

router.get("/:model/:id", modelValidation, async (req, res) => {
  let { model, id } = req.params
  const response = await store[model].get(id)
  res.status(200).json(response)
})

router.delete("/:model/:id", modelValidation, async (req, res) => {
  try {
    const { model, id } = req.params
    const response = await store[model].deleteOne({ _id: id })
    res.status(200).json(response)
  } catch (error) {
    res.status(403).send(error.message)
  }
})

router.post("/:model", modelValidation, async (req, res) => {
  try {
    const { model } = req.params
    const data = req.body
    const response = await store[model].insert(data)
    res.status(200).json(response)
  } catch (error) {
    res.status(403).send(error.message)
  }
})

router.put("/:model/:id", modelValidation, async (req, res) => {
  try {
    const { model, id } = req.params
    const newData = req.body

    const updatedData = await store[model].findOneAndUpdate(
      { _id: id },
      newData,
      { new: true }
    )
    if (!updatedData) {
      return res.status(404).json({ error: "Documento no encontrado" })
    }

    res.status(200).json(updatedData)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

module.exports = router

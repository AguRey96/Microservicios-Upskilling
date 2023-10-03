const { Schema } = require("mongoose")

const planetSchema = new Schema({
  _id: String,
  name: String,
  rotation_period: String,
  orbital_period: String,
  diameter: String,
  climate: String,
  gravity: String,
  terrain: String,
  surface_water: String,
  residents: [{ type: String, ref: "Character" }],
  films: [{ type: String, ref: "Film" }],
})

planetSchema.statics.list = async function () {
  return await this.find()
    .populate("films", ["_id", "title"])
    .populate("residents", ["_id", "name"])
}
planetSchema.statics.get = async function (id) {
  return await this.findById(id)
    .populate("films", ["_id", "title"])
    .populate("residents", ["_id", "name"])
}

planetSchema.statics.insert = async function (planet) {
  return await this.create(planet)
}

planetSchema.statics.deleteById = async function (id) {
  return await this.findByIdAndDelete(id)
}

planetSchema.statics.updateById = async function (id, updatedPlanet) {
  return await this.findByIdAndUpdate(id, updatedPlanet, { new: true })
}

module.exports = planetSchema

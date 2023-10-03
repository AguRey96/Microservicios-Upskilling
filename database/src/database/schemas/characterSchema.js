const { Schema } = require("mongoose")

const characterSchema = new Schema({
  _id: String,
  name: String,
  height: String,
  mass: String,
  hair_color: String,
  skin_color: String,
  eye_color: String,
  birth_year: String,
  gender: String,
  homeworld: { type: String, ref: "Planet" }, //referencia a planet_id "1"
  films: [{ type: String, ref: "Film" }], //array de referencias a film_id ["1", "2", "3", "6"]
})

characterSchema.statics.list = async function () {
  return await this.find()
    .populate("homeworld", ["_id", "name"])
    .populate("films", ["_id", "title"])
}

characterSchema.statics.get = async function (id) {
  return await this.findById(id)
    .populate("homeworld", ["_id", "name"])
    .populate("films", ["_id", "title"])
}

characterSchema.statics.insert = async function (character) {
  return await this.create(character)
}

characterSchema.statics.deleteById = async function (id) {
  return await this.findByIdAndDelete(id)
}

characterSchema.statics.updateById = async function (id, updatedCharacter) {
  return await this.findByIdAndUpdate(id, updatedCharacter, { new: true })
}

module.exports = characterSchema

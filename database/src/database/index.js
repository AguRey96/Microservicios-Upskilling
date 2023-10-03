const mongoose = require("mongoose")
const { MONGO_URI } = require("../config/envs")
const conn = mongoose.createConnection(MONGO_URI)

const characterSchema = require("./schemas/characterSchema")
const filmSchema = require("./schemas/filmSchema")
const planetSchema = require("./schemas/planetSchema")

module.exports = {
  Character: conn.model("Character", characterSchema),
  Film: conn.model("Film", filmSchema),
  Planet: conn.model("Planet", planetSchema),
}

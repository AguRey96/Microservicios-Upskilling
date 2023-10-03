const axios = require("axios")

module.exports = {
  list: async () => {
    const result = await axios.get("http://database:8004/Planet")
    return result.data
  },
  get: async (id) => {
    const result = await axios.get(`http://database:8004/Planet/${id}`)
    return result.data
  },

  delete: async (id) => {
    const result = await axios.delete(`http://database:8004/Planet/${id}`)
    return result.data
  },

  create: async (data) => {
    const result = await axios.post("http://database:8004/Planet", data)
    return result.data
  },

  update: async (id, data) => {
    const result = await axios.put(`http://database:8004/Planet/${id}`, data)
    return result.data
  },
}

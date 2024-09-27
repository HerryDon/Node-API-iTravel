const mongoose = require("mongoose");
const TownSchema = new mongoose.Schema({
  city: {
    type: String,
  },
  id: {
    type: Number,
  },
});

const Town = mongoose.model("Town", TownSchema);

module.exports = {
  Town,
};
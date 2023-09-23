const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  id: Number,
  name: String,
  status: String,
  species: String,
  type: String,
  gender: String,
  origin: {
    name: String,
    url: String,
  },
  location: {
    name: String,
    url: String,
  },
  image: String,
  episode: [String],
  url: String,
  created: Date,
});

const Character = mongoose.model('Character', characterSchema);

module.exports = Character;

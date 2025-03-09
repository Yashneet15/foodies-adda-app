const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name: String,
  cuisine: String,
  image: String,
  menu: Array
});

module.exports = mongoose.model('Restaurant', restaurantSchema);
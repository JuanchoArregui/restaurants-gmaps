const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
  // ...
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);
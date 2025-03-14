const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: String,
  items: Array,
  totalAmount: Number,
  status: { type: String, default: 'Pending' }
});

module.exports = mongoose.model('Order', orderSchema);
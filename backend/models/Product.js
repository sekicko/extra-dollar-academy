const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['Trading Bot XML', 'MT5 EA', 'Strategy Guide', 'Signal Service', 'Course Bundle', 'Indicator', 'Script', 'Webinar', 'Template', 'eBook'],
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  fileUrl: String,
  documentation: String,
  compatibility: String,
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0
  },
  downloadCount: {
    type: Number,
    default: 0
  },
  isPaid: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Product', productSchema);

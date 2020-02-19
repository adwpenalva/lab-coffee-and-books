'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['coffee shop', 'bookstore']
  },
  timestamp: Date,
  location: {
    type: [Number],
    min: -180,
    max: 180
  }
});

module.exports = mongoose.model('Place', placeSchema);

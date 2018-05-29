const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: {
    required: true,
    type: String
  },
  credits: {
    type: Number,
    default: 0
  }
})

var User = mongoose.model('users', userSchema);
module.exports = { User }

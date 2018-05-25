const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: {
    required: true,
    type: String
  }
})

var User = mongoose.model('users', userSchema);
module.exports = { User }

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {type: String},
  // email: {type: String, unique: true},
  password: {type: String},
  favorites: [{type: Schema.Types.ObjectId,ref:'Exit'}],
  userAgreement: {type: Boolean, default: false}

}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});


const User = mongoose.model('User', userSchema);

module.exports = User;
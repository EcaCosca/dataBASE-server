const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {type: String, unique: true},
  email: {type: String, unique: true},
  password: {type: String},
  favorites: [{type: Schema.Types.ObjectId,ref:'Exit'}],
  userAgreement: {type: Boolean, required: true, default: false}

}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});


const User = mongoose.model('User', userSchema);

module.exports = User;
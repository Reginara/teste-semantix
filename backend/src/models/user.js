const mongoose = require('../database/index_db');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
    minlength: 8,
  },

  userGroup: {
    type: [String],
    enum: ['contractor', 'cooker', 'supplies'],
    required: true,
  },

  company: {
    name: {
      type: String,
      required: false,
    },
    cnpj: {
      type: String,
      required: false,
    },
  },

  cookerId: {
    type: String,
    required: false,
  },

  supplies: {
    type: [String],
    required: false,
    enum: ['rice', 'beans', 'noodles'],
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.pre('save', async function (next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
});

const User = mongoose.model('User', UserSchema);

module.exports = {
  UserModel: User,
};

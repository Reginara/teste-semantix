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
    contractor: {
      company_name: {
        type: String,
        required: false,
      },
      company_id: {
        type: String,
        required: false,
        length: 14,
      },
    },
    cooker: {
      cooker_id: {
        type: Number,
        required: false,
        length: 9,
      },
    },
    supplies: ['rice', 'beans', 'pasta', null],
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

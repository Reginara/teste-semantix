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
  },
  userGroup: {
    type: Object,
    required: true,
    select: true,
    options: {
      provider: {
        company: {
          type: String,
        },
        CNPJ: {
          type: Number,
        },
      },
      cooker: {
        CRI: {
          type: Number,
        }
      },
      supplies: {
        type: Object,
        options: {
          supply1: {
            type: String,
          },
          supply2: {
            type: String,
          },
          supply3: {
            type: String,
          },
        },
      },
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.pre('save', async function(next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
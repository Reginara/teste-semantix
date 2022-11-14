const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const authConfig = require('../config/auth.json');

const { UserModel } = require('../models/user');

const router = express.Router();

function generateToken(params = {}) {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 86400,
  });
}

const registerAccount = async (req, res) => {
  const { email } = req.body;

  try {
    const alreadyRegisteredAccount = await UserModel.findOne({ email });

    if (alreadyRegisteredAccount) {
      return res.status(400).send({ error: 'User already exists' });
    }

    const user = await UserModel.create(req.body);

    user.password = undefined;

    return res.send({
      user,
      token: generateToken({ id: user.id }),
    });
  } catch (err) {
    return res.status(400).send({ error: 'Registration failed' });
  }
};

const loginAccount = async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email }).select('+password');

  if (!user) {
    console.log('nao tem user');

    return res.status(400).send({ error: 'Invalid e-mail or password' });
  }

  if (!(await bcrypt.compare(password, user.password))) {
    console.log('password nao bate');
    return res.status(400).send({ error: 'Invalid e-mail or password' });
  }

  user.password = undefined;

  res.send({
    user,
    token: generateToken({ id: user.id }),
  });
};

module.exports = {
  registerAccount,
  loginAccount,
};

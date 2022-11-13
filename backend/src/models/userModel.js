const mongoose = require('../database/index_db');

const db = mongoose.connection;
const collection = db.collection('users');

const userExists = async ({ email }) => {
  const user = await collection.findOne({ email });
  return user;
};

const getUserByEmail = async ({ email }) => {
  const user = await collection.findOne({ email });
  return user !== null;
};

const getUsersByGroup = async ({ userGroup }) => {
  const users = await collection.find({ userGroup }).toArray();
  return users;
};

const getAllUsers = async () => {
  const users = await collection.find().toArray();
  return users;
};

const createUser = async ({ name, email, password, userGroup, cookerId, company, supplies }) => {
  const user = await collection.insertOne({
    name,
    email,
    password,
    userGroup,
    cookerId,
    company,
    supplies,
  });
  return { _id: user.insertedId, name, email, password, userGroup, cookerId, company, supplies };
};

module.exports = {
  userExists,
  getUsersByGroup,
  createUser,
  getAllUsers,
  getUserByEmail
};

const mongoose = require('../database/index_db');

const userExists = async ({ email }) => {
  const db = await mongoose();
  const user = await db.collection('users').findOne({ email });
  return user !== null;
};

const getUsersByGroup = async ({ userGroup }) => {
  const db = await mongoose();
  const users = await db.collection('users').find({ userGroup }).toArray();
  return users;
};

const createUser = async ({ name, email, password, userGroup, cookerId, company, supplies }) => {
  const db = await mongoose();
  const user = await db.collection('users').insertOne({
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
};

const UserModel = require('../models/userModel');

const getUserByEmail = async (email) => {
  const user = await UserModel.userExists(email);
  return user;
};

const getAllUsers = async () => {
  const allUsers = await UserModel.getAllUsers();
  return allUsers;
};

const createUser = async (name, email, password, userGroup, cookerId, company, supplies) => {
  const userExists = await UserModel.userExists({ email });
  if (userExists) {
    return { errorCode: 'User already exists' };
  }
  const newUser = await UserModel.createUser({ name, email, password, userGroup, cookerId, company, supplies });
  return newUser;
};

const getUserByGroup = async (userGroup) => {
  const users = await UserModel.getUsersByGroup({ userGroup });
  return users;
};

module.exports = {
  getUserByEmail,
  getAllUsers,
  createUser,
  getUserByGroup,
};
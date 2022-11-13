const ModelUser = require('../models/userModel');

const getUserByEmail = async (email) => {
  const user = await ModelUser.userExists(email);
  return user;
};

const getAllUsers = async () => {
  const allUsers = await ModelUser.getAllUsers();
  return allUsers;
};

const createUser = async (name, email, password, userGroup, cookerId, company, supplies) => {
  const userExists = await ModelUser.userExists({ email });
  if (userExists) {
    return { errorCode: 'User already exists' };
  }
  const newUser = await ModelUser.createUser({
    name,
    email,
    password,
    userGroup,
    cookerId,
    company,
    supplies,
  });
  return newUser;
};

const getUserByGroup = async (userGroup) => {
  const users = await ModelUser.getUsersByGroup({ userGroup });
  return users;
};

module.exports = {
  getUserByEmail,
  getAllUsers,
  createUser,
  getUserByGroup,
};

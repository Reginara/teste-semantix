const { UserModel } = require('../models/user');
const ModelUser = require('../models/userModel');

const getUserByEmail = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await ModelUser.userExists({ email });
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getAllUsers = async (req, res) => {
  const users = await ModelUser.getAllUsers();
  if (users.length === 0) {
    return res.status(404).json({ message: 'We do not found users' });
  }
  res.status(200).json(users);
};

const createUser = async (req, res) => {
  const { name, email, password, userGroup, cookerId, company, supplies } = req.body;
  const user = new UserModel({
    name,
    email,
    password,
    userGroup,
    cookerId,
    company,
    supplies,
  });
  try {
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const getUserByGroup = async (req, res) => {
  const { userGroup } = req.params;
  const users = await ModelUser.getUsersByGroup({ userGroup });
  if (users.length === 0) {
    return res.status(404).json({ message: 'We do not found users for this group' });
  }
  res.status(200).json(users);
};

module.exports = {
  getAllUsers,
  createUser,
  getUserByGroup,
  getUserByEmail,
};

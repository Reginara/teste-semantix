const { UserModel } = require('../models/user');
const UserService = require('../service/userServices');

const getUserByEmail = async (req, res) => {
  const { email } = req.params;
  try {
    const user = await UserService.getUserByEmail(email);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
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
  try {
    const users = await UserService.getUserByGroup(userGroup);
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  getAllUsers,
  createUser,
  getUserByGroup,
  getUserByEmail,
};

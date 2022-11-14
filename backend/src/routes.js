const express = require('express');
const userController = require('./controllers/userController');
const autController = require('./controllers/authController');
// const authMiddleware = require('./middleware/auth');

const router = express.Router();

router.post('/login', autController.loginAccount);
router.post('/register', autController.registerAccount);

router.get('/user', userController.getUserByEmail);
router.get('/users', userController.getAllUsers);
router.post('/createUser', userController.createUser);
router.get('/users/:userGroup', userController.getUserByGroup);

module.exports = router;

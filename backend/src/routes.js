const express = require('express');
const userController = require('./controllers/userController');
// const authMiddleware = require('./middleware/auth');

const router = express.Router();

// router.use('/auth', require('./controllers/authController'));

router.get('/user', userController.getUserByEmail);
router.get('/users', userController.getAllUsers);
router.post('/createUser', userController.createUser);
router.get('/users/:userGroup', userController.getUserByGroup);

module.exports = router;

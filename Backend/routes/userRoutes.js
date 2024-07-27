const express = require('express');

const router = express.Router();

const userRoutes = require('../controllers/userController');

router.route('/').get(userRoutes.getAllUsers).post(userRoutes.createUser);

router
  .route('/:id')
  .get(userRoutes.getUser)
  .patch(userRoutes.updateUser)
  .delete(userRoutes.deleteUser);

module.exports = router;

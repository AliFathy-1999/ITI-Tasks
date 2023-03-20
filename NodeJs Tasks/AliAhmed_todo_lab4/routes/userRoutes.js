const express = require('express')
const userController = require('../controllers/userController');
const validateUser = require('../middlewares/userValidateData.js');
const router = express.Router();

router.post('/users',userController.register);
router.get("/users",userController.users);
router.delete("/users/:id",userController.deleteUser);
router.patch("/users/:id",validateUser.validation,userController.editUser)

module.exports = router;

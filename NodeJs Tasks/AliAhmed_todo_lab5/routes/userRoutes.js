const express = require('express')
const userController = require('../controllers/userController');
const validateUser = require('../middlewares/userValidateData.js');
const userAuth = require('../middlewares/userAuth.js');
const router = express.Router();

router.post('/users',userController.register);
router.post('/users/login',userController.login)
router.get("/users",userController.getUsersFname);
router.delete("/users/:id",userController.deleteUser);
router.patch("/users/:id",userAuth,userController.editUser)//validateUser.validation
router.get("/users/me",userAuth,userController.getMe)
module.exports = router;

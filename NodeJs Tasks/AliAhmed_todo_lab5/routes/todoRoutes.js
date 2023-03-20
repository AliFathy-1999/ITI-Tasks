const express = require('express')
const controller = require('../controllers/controller');
const userAuth = require('../middlewares/userAuth.js');
const router = express.Router();

router.post("/todos",controller.addTasks)
router.patch("/todos/:id",userAuth,controller.editTask)
router.delete("/todos/:id",userAuth,controller.deleteTask)
router.get("/users/:userId/todos",controller.getUserTask)
router.get("/todos",controller.getTasksByStatus)

module.exports = router;

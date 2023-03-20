const express = require('express')
const controller = require('../controllers/controller');
const router = express.Router();
router.post("/todos",controller.addTasks)
router.patch("/todos/:id",controller.editTask)
router.delete("/todos/:id",controller.deleteTask)
router.get("/users/:userId/todos",controller.getUserTask)
router.get("/todos",controller.getTasksByStatus)

module.exports = router;

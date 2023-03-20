const express = require('express')
const controller = require('../controller.js');
const router = express.Router();

router.get("/",controller.getTasks)
router.get("/todos",controller.getTasks)
router.get("/todos/:id",controller.getSingleTask)
router.post("/todos",controller.addTasks)
router.delete("/todos/:id",controller.deleteTask)
router.patch("/todos/:id",controller.updateSingleTask)
router.get("*",controller.errorPage)
module.exports = router;

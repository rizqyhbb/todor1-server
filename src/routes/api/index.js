const { Router } = require("express");
const { API_ROUTES } = require("..");
const TaskController = require("../../controllers/task-controller");
const UserController = require("../../controllers/user-controller");
const authentication = require("../../middlewares/authentication");

const router = Router()

router.post(API_ROUTES.REGISTER, UserController.register)
router.post(API_ROUTES.LOGIN, UserController.login)

router.use(authentication)
router.get(API_ROUTES.TASKS, TaskController.getAllTask)
module.exports = router
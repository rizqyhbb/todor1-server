const { Router } = require("express");
const { API_ROUTES } = require("..");
const TaskController = require("../../controllers/task-controller");
const UserController = require("../../controllers/user-controller");
const authentication = require("../../middlewares/authentication");
const authorization = require("../../middlewares/authorization");

const router = Router()

router.post(API_ROUTES.REGISTER, UserController.register)
router.post(API_ROUTES.LOGIN, UserController.login)

router.use(authentication)
router.get(API_ROUTES.TASKS, TaskController.getAllTask)
router.post(API_ROUTES.TASKS, TaskController.addTask)
router.delete(API_ROUTES.TASKS_BY_ID, [authorization], TaskController.deleteTask)
module.exports = router
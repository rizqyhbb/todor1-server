const { Router } = require("express");
const { API_ROUTES } = require("..");
const UserController = require("../../controllers/user-controller");

const router = Router()

router.get(API_ROUTES.ROOT, (req, res) => {
  res.send('This is Root')
})

router.post(API_ROUTES.REGISTER,UserController.register)

module.exports = router
const { Router } = require("express");
const { API_ROUTES } = require("..");

const router = Router()

router.get(API_ROUTES.ROOT, (req, res) => {
  res.send('This is Root')
})

module.exports = router
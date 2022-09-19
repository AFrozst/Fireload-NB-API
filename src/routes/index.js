const { Router } = require("express");
const router = Router();
const controlerUsers = require("../app/controllers/UserController");

router.get("/", (req, res) => {
  res.send("Welcome Fireload NB");
});

router.get("/users", controlerUsers.getUsers);
router.get("/users/:id", controlerUsers.getUserById);
router.get("/sectores", controlerUsers.getSectores);
router.get("/sectores/:id", controlerUsers.getSectorById);

module.exports = router;

const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Bienvenido a Fireload NB API" });
});

module.exports = router;

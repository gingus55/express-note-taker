const { Router } = require("express");
const noteRoutes = require("./noteRoutes");

const router = Router();

router.use("/notes", noteRoutes);

module.exports = router;

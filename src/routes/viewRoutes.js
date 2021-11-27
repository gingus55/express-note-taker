const { Router } = require("express");
const apiRoutes = require("./api");

const router = Router();

router.use("/notes", apiRoutes);

module.exports = router;

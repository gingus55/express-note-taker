const { Router } = require("express");
const apiRoutes = require("./api");
const viewRoutes = require("./viewRoutes");

const router = Router();

router.use("/api", apiRoutes);
router.use("/", viewRoutes);

module.exports = router;

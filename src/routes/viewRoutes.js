const { Router } = require("express");
const { renderHome, renderAllNotes } = require("../controllers/view");

const router = Router();

router.get("/", renderHome);
router.get("/notes", renderAllNotes);

module.exports = router;

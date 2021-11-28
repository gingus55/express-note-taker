const { Router } = require("express");
const {
  getNotes,
  createNotes,
  deleteNotes,
} = require("../controllers/api/notes");

const router = Router();

router.get("/", getNotes);

router.post("/", createNotes);

router.delete("/:id", deleteNotes);

module.exports = router;

const { getDataFromFile, writeDataToFile } = require("../../utils");
const { v4: uuidv4 } = require("uuid");

const validKeys = ["title", "text"];

const getNotes = async (req, res) => {
  const notes = await getDataFromFile();

  return res.json(notes);
};

const createNotes = (req, res) => {
  const payload = req.body;

  const isValid = validKeys.every((key) => Object.keys(payload).includes(key));

  if (isValid) {
    const newNote = {
      id: uuidv4(),
      ...payload,
    };

    const notes = getDataFromFile();

    notes.push(newNote);

    writeDataToFile(JSON.stringify(notes));

    return res.json(newNote);
  }

  return res.status(400).json({ message: "Please read our documentation" });
};

const deleteNotes = (req, res) => {
  const { id } = req.params;

  const notes = getDataFromFile();

  const note = notes.find((note) => note.id === id);

  if (!note) {
    return res.status(404).json({
      message: `No note with id: ${id}`,
    });
  }

  const newNotes = notes.filter((note) => note.id !== id);

  writeDataToFile(JSON.stringify(newNotes));

  return res.json(newNotes);
};

module.exports = {
  getNotes,
  createNotes,
  deleteNotes,
};

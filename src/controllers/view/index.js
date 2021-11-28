const path = require("path");

const renderHome = (req, res) => {
  const filePath = path.join(__dirname, "../../../public/index.html");
  res.sendFile(filePath);
};

const renderAllNotes = (req, res) => {
  const filePath = path.join(__dirname, "../../../public/notes.html");
  res.sendFile(filePath);
};

module.exports = {
  renderHome,
  renderAllNotes,
};

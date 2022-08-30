const fs = require("fs");
const path = require("path");

function createNewNote(body, notesArray){
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../Develop/db/db.json'),
        JSON.stringify({notes: notesArray}, null, null)
    );
    return note;
}

function validateNote(note){
    console.log("reached 4");
    console.log(note);
}

module.exports = {
  createNewNote,
  validateNote,
};
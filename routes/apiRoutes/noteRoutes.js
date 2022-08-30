const router = require("express").Router();
const { createNewNote, validateNote } = require('../../lib/notes');
const { notes } = require('../../Develop/db/db');

router.get('/notes', (req, res) => {
    let results = notes;
    console.log(results);
    res.json(results);
});
router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    const note = createNewNote(req.body, notes);
    res.json(note);
});

module.exports = router;
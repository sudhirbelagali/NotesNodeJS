const fs = require('fs');

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};
var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };

  var duplicateNotes = notes.filter((note) => {
    return note.title === title;
  });
  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

var getAll = () => {
  return fetchNotes();
};

var getNote = (title) => {    
  var notes = fetchNotes();
  var note = {
    title
  };
  var filteredNotes = notes.filter((note) => {
    return note.title === title;
  });
    return filteredNotes[0];
};

var removeNote = (title) => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => {
    return note.title !== title;
  });
    saveNotes(filteredNotes);
    return notes.length !== filteredNotes.length;
}; 
var logNote = (notereturn) => {
  debugger;
  console.log("-------");
  console.log(`Title: ${notereturn.title}`);
  console.log(`Body: ${notereturn.body}`);
};       

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};
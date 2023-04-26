import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNoteList] = useState([]);

  function addNote(newNotes) {
    setNoteList((prevNotes) => {
      return [...prevNotes, newNotes];
    });
  }

  function deleteNote(id) {
    setNoteList((prevNotes) => {
      return prevNotes.filter((prevNote, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea callNote={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;

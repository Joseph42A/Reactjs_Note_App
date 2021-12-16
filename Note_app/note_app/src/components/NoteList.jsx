import React from "react";
import AddNote from "./AddNote";

import Note from "./Note";

const NoteList = (props) => {
  return (
    <div className="notes_list">
      {props.notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          text={note.text}
          date={note.date}
          handleDeleteNote={props.handleDeleteNote}
        />
      ))}
      <AddNote
        handleAddNote={props.handleAddNote}
        key="fhdsiufhuusahgiu84784774#$$"
      />
    </div>
  );
};

export default NoteList;

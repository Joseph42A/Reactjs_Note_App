import React, { useState } from "react";

function AddNote({ handleAddNote }) {
  const [notetext, setNoteText] = useState("");
  let characterLimit = 200;

  const handleChange = (e) => {
    if (characterLimit - e.target.value.length >= 0) {
      setNoteText(e.target.value);
    }
  };

  const onSaveHandler = () => {
    if (notetext.trim().length > 0) {
      handleAddNote(notetext);
      setNoteText("");
    }
  };

  return (
    <div className="note new">
      <textarea
        placeholder="Type to add a note"
        cols="10"
        onChange={handleChange}
        rows="8"
        value={notetext}
      ></textarea>
      <div className="note-footer">
        <small>{characterLimit - notetext.length} Remaining</small>
        <button className="save" onClick={onSaveHandler}>
          Save
        </button>
      </div>
    </div>
  );
}

export default AddNote;

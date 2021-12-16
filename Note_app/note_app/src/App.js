import React, { useEffect, useState } from "react";
import NoteList from "./components/NoteList";
import { nanoid } from "nanoid";
import Search from "./components/Search";
import Header from "./components/‌Header";

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "Please add your fist note",
      date: "12/3/2021",
    },
  ]);

  const [searchText, setSearchText] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  // check if we do have data in local storge
  useEffect(() => {
    // parse to js object and get the data
    const savedNote = JSON.parse(localStorage.getItem("react-notes-app-data"));
    if (savedNote) {
      setNotes(savedNote);
    }
  }, []);
  // saving
  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    /// creating a new date
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text,
      date: date.toLocaleDateString(),
    };
    // This is contains all the previouse one
    // const newNotes = [...notes, newNote];
    // setNotes(newNotes);
    setNotes((not) => {
      return [
        ...notes,
        {
          id: nanoid(),
          text,
          date: date.toLocaleDateString(),
        },
      ];
    });
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className={isDarkMode && "dark-mode"}>
      <div className="container">
        <Header handleDarkMode={setIsDarkMode} />
        <Search handleSearchText={setSearchText} />
        <NoteList
          // based on search
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          // notes={notes}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
}

export default App;

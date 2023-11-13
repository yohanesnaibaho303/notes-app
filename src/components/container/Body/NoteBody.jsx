import React from "react";
import NoteInput from "./NoteInput";
import NotesList from "./NotesList";

function NoteBody({ notesActive, notesArsip, setNotes }) {
  return (
    <div className="note-app__body">
      <NoteInput setNotes={setNotes} />
      <NotesList
        label="Current Notes"
        setNotes={setNotes}
        notes={notesActive}
      />
      <NotesList label="Archived" setNotes={setNotes} notes={notesArsip} />
    </div>
  );
}

export default NoteBody;

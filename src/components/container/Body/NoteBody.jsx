import React from "react";
import NoteInput from "./NoteInput";
import NotesList from "./NotesList";

function NoteBody() {
  return (
    <div className="note-app__body">
      <NoteInput />
      <h2>Current Notes</h2>
      <NotesList />
      <h2>Archive</h2>
      <p className="notes-list__empty-message">No notes archived</p>
    </div>
  );
}

export default NoteBody;

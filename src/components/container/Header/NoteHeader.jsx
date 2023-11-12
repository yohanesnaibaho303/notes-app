import React from "react";
import NoteSearch from "./NoteSearch";

function NoteHeader() {
  return (
    <div className="note-app__header">
      <h1>Notes App</h1>
      <NoteSearch />
    </div>
  );
}

export default NoteHeader;

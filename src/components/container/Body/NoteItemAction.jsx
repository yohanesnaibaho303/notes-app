import React from "react";

const NoteItemAction = () => {
  return (
    <div className="note-item__action">
      <button className="note-item__delete-button">Delete</button>
      <button className="note-item__archive-button">Archive</button>
    </div>
  );
};

export default NoteItemAction;

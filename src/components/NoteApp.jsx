import React from "react";
import NoteHeader from "./container/Header/NoteHeader";
import NoteBody from "./container/Body/NoteBody";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="note-app">
        <NoteHeader />
        <NoteBody />
      </div>
    );
  }
}

export default NoteApp;

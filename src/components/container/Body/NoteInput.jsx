import React, { useState } from "react";
import Input from "./Input";

function NoteInput({ setNotes }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onSubmitEventHandler = (event) => {
    event.preventDefault();
    const timestamp = new Date().toISOString();

    setNotes((datas) => [
      ...datas,
      {
        id: timestamp,
        title: title,
        body: body,
        archived: false,
        createdAt: timestamp,
      },
    ]);
  };

  return (
    <div className="note-input">
      <h2>Create New Note</h2>
      <form onSubmit={onSubmitEventHandler}>
        <p className="note-input__title__char-limit">
          Remaining Character: {50 - title.length}
        </p>
        <Input
          value={title}
          onChange={setTitle}
          id="title"
          name="title"
          type="text"
          placeholder="Write your title here ..."
          required
        />
        <Input
          value={body}
          onChange={setBody}
          id="body"
          name="body"
          type="textarea"
          placeholder="Write your full note here ..."
          required
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default NoteInput;

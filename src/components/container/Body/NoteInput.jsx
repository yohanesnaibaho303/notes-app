import React from "react";

const NoteInput = () => {
  return (
    <div className="note-input">
      <h2>Create New Note</h2>
      <form>
        <p className="note-input__title__char-limit ">Remaining character: </p>
        <input
          type="text"
          className="note-input__title"
          placeholder="Write Your Title Here ..."
        />
        <textarea
          name="note-input__body"
          placeholder="Write Your Full Note Here ..."
          cols="30"
          rows="10"
        ></textarea>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default NoteInput;

import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  function updateNote(event) {
    const { name, value } = event.target;
    setNote((prevItem) => {
      return { ...prevItem, [name]: value };
    });
  }

  function checkClick(event) {
    props.callNote(note);
    setNote({ title: "", content: "" });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          onChange={updateNote}
          name="title"
          value={note.title}
          placeholder="Title"
        />
        <textarea
          onChange={updateNote}
          name="content"
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={checkClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;

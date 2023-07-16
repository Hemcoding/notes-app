import React, { useState } from "react";
import "./Notes.css";
import { useDispatch } from "react-redux";
import { createNote } from "../redux/slice/notesSlice";
import { nanoid } from "@reduxjs/toolkit";


function CreateNote() {
  const [desc, setDesc] = useState("");

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(
      createNote({
        desc,
        id: nanoid(5),
      })
    );
  }

  return (
    <div className="main-container">
      <h1>Notes</h1>
      <div className="note_container">
        <div className="note_box">
          <textarea
            className="textarea"
            cols="25"
            rows="8"
            placeholder="Type your notes here...."
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
          <p className="time">{new Date().toLocaleString()}</p>
          <button className="save_btn" onClick={handleSubmit}>
            Save
          </button>
        </div>
      </div>
      {/* <ListNotes /> */}
    </div>
  );
}

export default CreateNote;

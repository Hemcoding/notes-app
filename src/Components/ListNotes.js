import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillDelete } from "react-icons/ai";
import { deleteNote, updateNote } from "../redux/slice/notesSlice";
import "./Notes.css";

function ListNotes() {
  const notes = useSelector((state) => state.notesSlice.notes);
  const dispatch = useDispatch();
 
  // const handleFormSubmit = (e) => {
  //   e.preventDefault();
  //   // Dispatch the updateNote action with the updated content and note ID.
  //   dispatch(updateNote({ notes.desc }));
  // };


  return (
    <div id="list">
      {notes.map((note) => {
        return (
          <>
            <li className="note_box" key={note.id}>
              <textarea className="textarea" cols="25" rows="8">
                {note.desc}
              </textarea>
              <div id="bottom_bar">
                <div id="note_id">{note.id}</div>

                <i onClick={() => dispatch(deleteNote(note.id))}>
                  <AiFillDelete size={40} />

                  {/* <button onClick={() => dispatch(updateNote(note.id ,note.desc))}>Update</button> */}
                </i>
              </div>
            </li>
          </>
        );
      })}
    </div>
  );
}

export default ListNotes;

import React, { useEffect, useState } from 'react';
import "./Notes.css"

export const Notes = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    fetch("https://bored-puce-cuff.cyclic.cloud/posts/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`
      }
    }).then(res => res.json())
      .then(data => setNotes(data))
      .catch(err => console.log(err))
  }, [])
  return (
    <div>
      <h2>To see the notes</h2>
      {notes.map(note => (
        <div key={note.id} className="note-box">
          <h3>{note.title}</h3>
          <p>{note.body}</p>
        </div>
      ))}
    </div>
  )
}

import React, { useState } from 'react';

export default function Movie({ movie }) {
  const { title, hasSeen, id, handlers } = movie;
  const { updateMovie, deleteMovie } = handlers;
  const [input, setInput] = useState('');
  const [seenStatus, setSeenStatus] = useState(hasSeen);

  return (
    <div>
      <input defaultValue={title} onChange={(e) => setInput(e.target.value)} />
      <select
      defaultValue={hasSeen}
       onChange={(e) => setSeenStatus(e.target.value)}
       >
        hasSeen: {hasSeen ? <option selected>True</option> : <option>False</option>}
      </select>
      <button onClick={() => updateMovie(id, title: input, hasSeen)}>Edit</button>
      <button onClick={() => deleteMovie(id)}>Remove</button>
    </div >
  );
};

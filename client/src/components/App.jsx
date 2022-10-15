import React, { useState, useEffect } from 'react';
import List from './List.jsx';
import axios from 'axios';

export default function App() {
  const [input, setInput] = useState('');
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const myMovies = await (await axios.get('/movies')).data;
    console.log(myMovies);
    setMovies(myMovies);
  };
  const postMovie = async () => {
    console.log('this: ', this);
    await axios.post('/movie/post', { title: input });
    getMovies();
  };
  const updateMovie = async (id, title, hasSeen) => {
    console.log('title:', title);
    await axios.patch('/movie/patch', { id, title, hasSeen })
    getMovies();
  };
  const deleteMovie = async (id) => {
    // console.log('title:', id);
    await axios.delete('/movie/delete', { data: { id } })
    getMovies();
  };
  const handlers = {
    updateMovie,
    deleteMovie,
    getMovies,
    postMovie,
  };

  useEffect(() => {
    getMovies();
  }, [])

  return (
    <div>
      <h1>
        Movie List
      </h1>
      <input onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => handlers.postMovie()}></button>
      <br />
      <List
        movies={movies}
        handlers={handlers}
      />
    </div>
  )
};

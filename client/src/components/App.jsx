import React, { useState, useEffect } from 'react';
import List from './List';
import axios from 'axios';

export default function App() {
  const [input, setInput] = useState('');
  const [movies, setMovies] = useState([]);

  const handlers = {
    getMovies: async () => {
      const movies = await axios.get('/movies')();
      setMovies(movies);
    },
    postMovie: async () => {
      await axios.post('/movie/post', { title: input });
      this.getMovies();
    }
    updateMovie: async (id, title, hasSeen) => {
      await axios.patch('/movie/patch', { id, title, hasSeen })
      this.getMovies();
    },
    deleteMovie: async (id) => {
      await axios.delete('/movie/delete', { data: { id } })
      this.getMovies();
    },
  };

  useEffect(() => {
    handlers.getMovies;
  }, [])

  return (
    <div>
      <h1>
        Movie List
      </h1>
      <input onChange={(e) => setInput(e.value.target)} />
      <button onClick={() => handlers.postMovie()}></button>
      <br />
      <List movies={movies} handlers={handlers} />
    </div>
  )
};

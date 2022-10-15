import React from 'react'
import Movie from './Movie';

export default function List({ movies, handlers }) {
  return (
    <div>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          hasSeen={movie.hasSeen}
          handlers={handlers}
        />
      ))}
    </div>
  );
};

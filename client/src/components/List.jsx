import React from 'react'
import Movie from './Movie.jsx';

export default function List({ movies, handlers }) {
  return (
    <div>
      {!(movies.length > 0) ? null : movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          id={movie.id}
          hasSeen={movie.hasSeen}
          handlers={handlers}
        />
      ))}
    </div>
  );
};

import React from 'react';
import MovieText from './MovieText';

const ScrollText = ({films}) => {

  const movieContent = films.map((movie) => {
    console.log(movie);
    return <MovieText movie={movie} />
  });

  return (
    <div>
      {movieContent}
    </div>
  )
}

export default ScrollText;

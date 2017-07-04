import React from 'react';
import MovieText from './MovieText';

const ScrollText = ({films}) => {
  console.log(films.length);
  const randNum = Math.floor((Math.random() * films.length))

  // const movieContent = films.map((movie) => {
  //   console.log(movie);
  //   return <MovieText movie={movie} />
  // });

  return (
    <div>
      <MovieText movie={films} randNum={randNum} />
    </div>
  )
}

export default ScrollText;

import React from 'react';
import MovieText from './MovieText';

const ScrollText = ({films}) => {
  console.log(films.length);
  const randNum = Math.floor((Math.random() * films.length))

  return (
    <div>
      <MovieText movie={films} randNum={randNum} />
    </div>
  )
}

export default ScrollText;

import React from 'react';
import MovieText from './MovieText';
import './ScrollText.css'

const ScrollText = ({films}) => {
  const randNum = Math.floor((Math.random() * films.length))

  return (
    <aside className="scroll-text">
      <MovieText movie={films} randNum={randNum} />
    </aside>
  )
}

export default ScrollText;

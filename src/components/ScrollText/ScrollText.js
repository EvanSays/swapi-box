import React from 'react';
import MovieText from './MovieText';
import './ScrollText.css'
import PropTypes from 'prop-types';

const ScrollText = ({films}) => {
  const randNum = Math.floor((Math.random() * films.length))

  return (
    <aside className="scroll-text">
      <MovieText movie={films} randNum={randNum} />
    </aside>
  )
}

ScrollText.propTypes = {
  films: PropTypes.array.isRequired
}

export default ScrollText;

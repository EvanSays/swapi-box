import React from 'react';
import MovieText from './MovieText';
import './ScrollText.css'
import PropTypes from 'prop-types';

const ScrollText = ({films}) => {
  return (
    <aside className="scroll-text">
      <MovieText movie={films}/>
    </aside>
  )
}

ScrollText.propTypes = {
  films: PropTypes.object.isRequired
}

export default ScrollText;

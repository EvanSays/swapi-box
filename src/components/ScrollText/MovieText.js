import React from 'react'
import './MovieText.css'
import PropTypes from 'prop-types';

const MovieText = ({movie, randNum}) => {
  return (
  <div className="movie-text">
    <section className="star-wars">
      <div className="crawl">
        <div className="title">
          <p>{movie[randNum].opening_crawl}</p>
        </div>
        <h1 className="title">{movie[randNum].title}</h1>
        <p className="date">{movie[randNum].release_date}</p>
      </div>
    </section>
</div>
  )
}

MovieText.propTypes = {
  movie: PropTypes.array.isRequired,
  randNum: PropTypes.number.isRequired
}

export default MovieText;

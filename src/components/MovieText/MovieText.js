import React from 'react'
import './MovieText.css'
import PropTypes from 'prop-types';

const MovieText = ({movie}) => {
  return (
  <div className="movie-text">
    <section className="star-wars">
      <div className="crawl">
        <div className="title">
          <p className="opening-crawl-text">{movie.opening_crawl}</p>
        </div>
        <h1 className="movie-title">{movie.title}</h1>
        <p className="movie-date">{movie.release_date}</p>
      </div>
    </section>
</div>
  )
}

MovieText.propTypes = {
  movie: PropTypes.object.isRequired
}

export default MovieText;

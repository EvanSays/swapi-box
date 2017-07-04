import React from 'react'
import './MovieText.css'

const MovieText = ({movie}) => {
  // console.log(movie)
  return (
  <div>
    <div className="fade"></div>
    <section className="star-wars">
      <div className="crawl">
        <div className="title">
          <h1>{movie.opening_crawl}</h1>
        </div>
        <p>{movie.title}</p>
        <p>{movie.release_date}</p>
      </div>
    </section>
</div>
  )
}

export default MovieText;

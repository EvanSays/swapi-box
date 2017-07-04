import React from 'react'
import './MovieText.css'

const MovieText = ({movie, randNum}) => {
  console.log(randNum)
  return (
  <div>
    <div className="fade"></div>
    <section className="star-wars">
      <div className="crawl">
        <div className="title">
          <h1>{movie[randNum].opening_crawl}</h1>
        </div>
        <p>{movie[randNum].title}</p>
        <p>{movie[randNum].release_date}</p>
      </div>
    </section>
</div>
  )
}

export default MovieText;

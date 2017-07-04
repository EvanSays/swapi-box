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
          <p>{movie[randNum].opening_crawl}</p>
        </div>
        <h1 className="title">{movie[randNum].title}</h1>
        <p className="date">{movie[randNum].release_date}</p>
      </div>
    </section>
</div>
  )
}

export default MovieText;

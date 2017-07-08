import React from 'react';
import './PersonCard.css';

const PersonCard = ({peopleInfo, toggleFavorites}) => {
  let favorited;
  !peopleInfo.favorited ? favorited = 'normal-btn' : favorited = 'pink-btn'

  return (
    <div className="card">
      <h1>Name: {peopleInfo.name}</h1>
      <p>Hometown: {peopleInfo.homeworld}</p>
      <p>Species: {peopleInfo.species}</p>
      <p>Language: {peopleInfo.language}</p>
      <p>Population: {peopleInfo.population}</p>
      <button className={favorited} onClick={()=> toggleFavorites(peopleInfo)}>Like</button>
    </div>
  )
}

export default PersonCard;

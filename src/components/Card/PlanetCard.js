import React from 'react'
import './PersonCard'
import './PersonCard.css';

const PlanetCard = ({ planetInfo,
                      toggleFavorites,
                      cardLiked }) => {

  let favorited;
  !planetInfo.favorited ? favorited = 'normal-btn' : favorited = 'pink-btn'

  return (
    <div className="card">
      <h1>Name: {planetInfo.name}</h1>
      <p>Terrain: {planetInfo.terrain}</p>
      <p>Population: {planetInfo.population}</p>
      <p>Climate: {planetInfo.climate}</p>
      <p>Residents: {planetInfo.residents}</p>
      <button className={favorited} onClick={()=> toggleFavorites(planetInfo)}>Like</button>
    </div>
  )
}

export default PlanetCard;

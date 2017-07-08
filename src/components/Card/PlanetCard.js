import React from 'react'
import './PersonCard'
import './PersonCard.css';

const PlanetCard = ({ planetInfo,
                      toggleFavorites,
                      cardLiked }) => {

  if(planetInfo.residents.length > 1){
    planetInfo.residents = planetInfo.residents.join(', ')
  }

  let favorited;
  !planetInfo.favorited ? favorited = 'normal-btn' : favorited = 'pink-btn'

  return (
    <div className="card">
      <h3>Name: {planetInfo.name}</h3>
      <p>Terrain: {planetInfo.terrain}</p>
      <p>Population: {planetInfo.population}</p>
      <p>Climate: {planetInfo.climate}</p>
      <p>Residents: {planetInfo.residents}</p>
      <button className={favorited} onClick={()=> toggleFavorites(planetInfo)}>Like</button>
    </div>
  )
}

export default PlanetCard;

import React from 'react'
import './PersonCard'

const PlanetCard = ( {planetInfo, addFavorites} ) => {
  return (
    <div className="card">
      <h1>Name: {planetInfo.name}</h1>
      <p>Terrain: {planetInfo.terrain}</p>
      <p>Population: {planetInfo.population}</p>
      <p>Climate: {planetInfo.climate}</p>
      <p>Residents: {planetInfo.residents}</p>
      <button className="fave" onClick={()=> addFavorites(planetInfo)}>Like</button>

    </div>
  )
}

export default PlanetCard;

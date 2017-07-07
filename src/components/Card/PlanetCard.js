import React from 'react'
import './PersonCard'

const PlanetCard = ( {planetInfo} ) => {
  console.log('PLANETS YO', planetInfo);
  return (
    <div className="card">
      <h1>Name: {planetInfo.name}</h1>
      <p>Population: {planetInfo.population}</p>
      <p>Climate: {planetInfo.climate}</p>
      <p>Residents: {planetInfo.residents}</p>
    </div>
  )
}

export default PlanetCard;

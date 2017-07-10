import React from 'react'
import '../PersonCard/PersonCard.css';
import PropTypes from 'prop-types';
import starTrue from '../../assets/StarTrue.svg'
import starFalse from '../../assets/StarFalse.svg'

const PlanetCard = ({ planetInfo,
                      toggleFavorites,
                      cardLiked }) => {

  let favorited;
  !planetInfo.favorited ? favorited = [starTrue] : favorited = [starFalse]

  return (
    <div className="card">
      <h3 className='planet-name'>Name: {planetInfo.name}</h3>
      <p className='planet-terrain'>Terrain: {planetInfo.terrain}</p>
      <p className='planet-population'>Population: {planetInfo.population}</p>
      <p className='planet-climate'>Climate: {planetInfo.climate}</p>
      <p className='planet-residents'>Residents: {planetInfo.residents}</p>
      <button className="star-button" onClick={()=> toggleFavorites(planetInfo)}>
        <img src={favorited} alt=""/>
      </button>
    </div>
  )
}

PlanetCard.propTypes = {
  planetInfo: PropTypes.object.isRequired,
  toggleFavorites: PropTypes.func.isRequired
}

export default PlanetCard;

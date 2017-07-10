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
<table>
  <thead>
    <tr>
    <td colSpan="2" className='planet-name info-card-title'>{planetInfo.name}</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className='info-card-row'>Terrain:</td>
      <td className='planet-terrain info-card-info'>{planetInfo.terrain}</td>
    </tr>
    <tr>
      <td className='info-card-row'>Population:</td>
      <td className='planet-population info-card-info'>{planetInfo.population}</td>
    </tr>
    <tr>
      <td className='info-card-row'>Climate:</td>
      <td className='planet-climate info-card-info'>{planetInfo.climate}</td>
    </tr>
    <tr>
      <td className='info-card-row'>Residents:</td>
      <td className='planet-residents info-card-info'>{planetInfo.residents}</td>
    </tr>
  </tbody>
</table>
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

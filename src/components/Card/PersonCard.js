import React from 'react';
import './PersonCard.css';
import PropTypes from 'prop-types';

const PersonCard = ({peopleInfo, toggleFavorites}) => {
  let favorited;
  !peopleInfo.favorited ? favorited = 'normal-btn' : favorited = 'pink-btn'

  return (
    <div className="card">
      <h3>Name: {peopleInfo.name}</h3>
      <p>Hometown: {peopleInfo.homeworld}</p>
      <p>Species: {peopleInfo.species}</p>
      <p>Language: {peopleInfo.language}</p>
      <p>Population: {peopleInfo.population}</p>
      <button className={favorited} onClick={()=> toggleFavorites(peopleInfo)}><img className="fave" src={require('../../assets/StarWarsFave.svg')} /></button>
    </div>
  )
}

PersonCard.propTypes = {
  peopleInfo: PropTypes.object.isRequired,
  toggleFavorites: PropTypes.func.isRequired
}


export default PersonCard;

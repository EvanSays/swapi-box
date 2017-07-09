import React from 'react';
import './PersonCard.css';
import PropTypes from 'prop-types';
import starTrue from '../../assets/StarTrue.svg'
import starFalse from '../../assets/StarFalse.svg'

const PersonCard = ({peopleInfo, toggleFavorites}) => {

  let favorited;
  !peopleInfo.favorited ? favorited = [starTrue] : favorited = [starFalse]

  return (
    <div className="card">
      <h3>Name: {peopleInfo.name}</h3>
      <p>Hometown: {peopleInfo.homeworld}</p>
      <p>Species: {peopleInfo.species}</p>
      <p>Language: {peopleInfo.language}</p>
      <p>Population: {peopleInfo.population}</p>
      <button className="star-button" onClick={()=> toggleFavorites(peopleInfo)}>
        <img src={favorited} alt=""/>
      </button>
    </div>
  )
}

PersonCard.propTypes = {
  peopleInfo: PropTypes.object.isRequired,
  toggleFavorites: PropTypes.func.isRequired
}


export default PersonCard;

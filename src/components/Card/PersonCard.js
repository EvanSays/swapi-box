import React from 'react';
import './PersonCard.css';
import PropTypes from 'prop-types';
import starTrue from '../../assets/StarTrue.svg'
import starFalse from '../../assets/StarFalse.svg'

const PersonCard = ({peopleInfo, toggleFavorites}) => {
console.log(peopleInfo);
  let favorited;
  !peopleInfo.favorited ? favorited = [starTrue] : favorited = [starFalse]

  return (
    <div className="card">
      <h3 className="person-name">Name: {peopleInfo.name}</h3>
      <p className="person-town">Hometown: {peopleInfo.homeworld}</p>
      <p className="person-species">Species: {peopleInfo.species}</p>
      <p className="person-language">Language: {peopleInfo.language}</p>
      <p className="person-pop">Population: {peopleInfo.population}</p>
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

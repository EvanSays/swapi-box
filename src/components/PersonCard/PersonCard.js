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
      <table>
        <thead>
          <tr>
          <td colSpan="2" className="person-name info-card-title">{peopleInfo.name}</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='info-card-row'>Hometown:</td>
            <td className="person-town info-card-info">{peopleInfo.homeworld}</td>
          </tr>
          <tr>
            <td className='info-card-row'>Species:</td>
            <td className="person-species info-card-info">{peopleInfo.species}</td>
          </tr>
          <tr>
            <td className='info-card-row'>Language:</td>
            <td className="person-language info-card-info">{peopleInfo.language}</td>
          </tr>
          <tr>
            <td className='info-card-row'>Population:</td>
            <td className="person-pop info-card-info">{peopleInfo.population}</td>
          </tr>
        </tbody>
      </table>
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

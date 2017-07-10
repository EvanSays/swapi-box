import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';

const Button = ({populatePeople, populatePlanets, populateVehicles, populateFavorites, favorites}) => {

  const favCount = favorites.length;
  return (
    <div className="header-container">
      <div className="logo">swapibox</div>
      <header className="button-container">
        <button className="populate-people nav" onClick={() => populatePeople()}>
          <img className="people-icon" src={require('../../assets/005.svg')} alt="Image of Kylo Ren"/>
          <h3 className="header-people">PEOPLE</h3>
        </button>

        <button className="populate-planet nav" onClick={() => populatePlanets()}>
          <img className="people-icon" src={require('../../assets/007.svg')} alt="Image of a planet"/>
        <h3 className="header-planets">PLANETS</h3>
      </button>

        <button className="populate-vehicle nav" onClick={() => populateVehicles()}>
          <img className="people-icon" src={require('../../assets/003.svg')} alt="Image of a tie fighter"/>
          <h3 className="header-vehicles">VEHICLES</h3>
        </button>

        <button className="fave-btn nav" onClick={() => populateFavorites()}>

        <h3 className="header-vehicles">FAVORITES</h3>
        <div className="counter">{favCount}</div>
        </button>
      </header>
    </div>
  )
}

Button.propTypes = {
  populatePeople: PropTypes.func.isRequired,
  populatePlanets: PropTypes.func.isRequired,
  populateVehicles: PropTypes.func.isRequired,
  populateFavorites: PropTypes.func.isRequired,
  favorites: PropTypes.array.isRequired,
}

export default Button;

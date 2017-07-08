import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';

const Button = ({populatePeople, populatePlanetDetails, populateVehicles, populateFavorites, favorites}) => {

  const favCount = favorites.length;
  return (
    <div className="header-container">
      <div className="logo">swapibox</div>
      <header className="button-container">
        <button onClick={() => populatePeople()}>People</button>
        <button onClick={() => populatePlanetDetails()}>Planets</button>
        <button onClick={() => populateVehicles()}>Vehicles</button>
        <button className="fave-btn" onClick={() => populateFavorites()}>Favorites
        <div className="counter">{favCount}</div>
        </button>
      </header>
    </div>
  )
}

Button.propTypes = {
  populatePeople: PropTypes.func.isRequired,
  populatePlanetDetails: PropTypes.func.isRequired,
  populateVehicles: PropTypes.func.isRequired,
  populateFavorites: PropTypes.func.isRequired,
  favorites: PropTypes.array.isRequired,
}

export default Button;

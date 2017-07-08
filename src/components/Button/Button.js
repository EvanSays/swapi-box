import React from 'react';
import './Button.css';

const Button = ({populatePeople, populatePlanetDetails, populateVehicles, populateFavorites, favorites}) => {
  const favCount = favorites.length;
  return (
    <header className="button-container">
      <button onClick={() => populatePeople()}>People</button>
      <button onClick={() => populatePlanetDetails()}>Planets</button>
      <button onClick={() => populateVehicles()}>Vehicles</button>
      <button className="fave-btn" onClick={() => populateFavorites()}>Favorites
      <div className="counter">{favCount}</div>
      </button>
    </header>
  )
}

export default Button;

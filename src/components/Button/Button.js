import React from 'react';
import './Button.css';

const Button = ({populatePeople, populatePlanetDetails, populateVehicles}) => {
  return (
    <div>
      <button onClick={() => populatePeople()}>People</button>
      <button onClick={() => populatePlanetDetails()}>Planets</button>
      <button onClick={() => populateVehicles()}>Vehicles</button>
      <button onClick={() => populateVehicles()}>Favorites</button>
    </div>
  )
}

export default Button;

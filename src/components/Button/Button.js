import React from 'react';
import './Button.css';

const Button = ({populatePeople, populatePlanetDetails}) => {
  return (
    <div>
      <button onClick={() => populatePeople()}>People</button>
      <button onClick={() => populatePlanetDetails()}>Planets</button>
      <button onClick={() => console.log('Peace')}>Vehicles</button>
    </div>
  )
}

export default Button;

import React from 'react';
import './Button.css'

const Button = ({populatePeople}) => {
  return (
    <div>
      <button onClick={() => populatePeople()}>People</button>
      <button onClick={() => console.log('Yo')}>Planets</button>
      <button onClick={() => console.log('Peace')}>Vehicles</button>
    </div>
  )
}

export default Button;

import React from 'react';
import './Button.css'

const Button = () => {
  return (
    <div className="btn-container">
      <button onClick={() => console.log('Hi')}>People</button>
      <button onClick={() => console.log('Yo')}>Planets</button>
      <button onClick={() => console.log('Peace')}>Vehicles</button>
    </div>
  )
}

export default Button;

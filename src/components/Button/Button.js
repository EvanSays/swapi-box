import React from 'react';

const Button = () => {
  return (
    <div>
      <button onClick={() => console.log('Hi')}>People</button>
      <button onClick={() => console.log('Yo')}>Planets</button>
      <button onClick={() => console.log('Peace')}>Vehicles</button>
    </div>
  )
}

export default Button;

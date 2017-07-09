import React from 'react';
import './Loader.css'

const Loader = () => {
  return (
    <section className="loading-section">
      <div className="loading">Loading...</div>
      <img className="luke" src={require('../../assets/luke.png')} alt='Luke Skywalker Kneeling' />
    </section>
  )
}

export default Loader;

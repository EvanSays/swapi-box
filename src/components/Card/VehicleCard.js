import React from 'react'
import './PersonCard'
import PropTypes from 'prop-types';

const VehicleCard = ( {vehicleInfo, toggleFavorites} ) => {

  let favorited;
  !vehicleInfo.favorited ? favorited = 'normal-btn' : favorited = 'pink-btn'

  return (
    <div className="card">
      <h3>Name: {vehicleInfo.name}</h3>
      <p>Model: {vehicleInfo.model}</p>
      <p>Class: {vehicleInfo.vehicle_class}</p>
      <p>Passengers: {vehicleInfo.passengers}</p>
      <button className={favorited} onClick={()=> toggleFavorites(vehicleInfo)}><img className="fave" src={require('../../assets/StarWarsFave.svg')} /></button>
    </div>
  )
}

VehicleCard.propTypes = {
  vehicleInfo: PropTypes.object.isRequired,
  toggleFavorites: PropTypes.func.isRequired
}

export default VehicleCard;

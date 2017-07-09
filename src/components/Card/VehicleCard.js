import React from 'react'
import './PersonCard'
import PropTypes from 'prop-types';
import starTrue from '../../assets/StarTrue.svg'
import starFalse from '../../assets/StarFalse.svg'

const VehicleCard = ( {vehicleInfo, toggleFavorites} ) => {

  let favorited;
  !vehicleInfo.favorited ? favorited = [starTrue] : favorited = [starFalse]

  return (
    <div className="card">
      <h3>Name: {vehicleInfo.name}</h3>
      <p>Model: {vehicleInfo.model}</p>
      <p>Class: {vehicleInfo.vehicle_class}</p>
      <p>Passengers: {vehicleInfo.passengers}</p>
      <button className="star-button" onClick={()=> toggleFavorites(vehicleInfo)}>
        <img src={favorited} alt=""/>
      </button>
    </div>
  )
}

VehicleCard.propTypes = {
  vehicleInfo: PropTypes.object.isRequired,
  toggleFavorites: PropTypes.func.isRequired
}

export default VehicleCard;

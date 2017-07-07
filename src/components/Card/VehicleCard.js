import React from 'react'
import './PersonCard'

const VehicleCard = ( {vehicleInfo, addFavorites} ) => {
  return (
    <div className="card">
      <h1>Name: {vehicleInfo.name}</h1>
      <p>Model: {vehicleInfo.model}</p>
      <p>Class: {vehicleInfo.vehicle_class}</p>
      <p>Passengers: {vehicleInfo.passengers}</p>
      <button className="fave" onClick={()=> addFavorites(vehicleInfo)}>Like</button>

    </div>
  )
}

export default VehicleCard;

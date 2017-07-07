import React from 'react'
import './PersonCard'

const VehicleCard = ( {vehicleInfo} ) => {
  console.log('VEHICLES YO', vehicleInfo);
  return (
    <div className="card">
      <h1>Name: {vehicleInfo.name}</h1>
      <p>Model: {vehicleInfo.model}</p>
      <p>Class: {vehicleInfo.vehicle_class}</p>
      <p>Passengers: {vehicleInfo.passengers}</p>
    </div>
  )
}

export default VehicleCard;

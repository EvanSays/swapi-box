import React from 'react'
import '../PersonCard/PersonCard.css'
import PropTypes from 'prop-types';
import starTrue from '../../assets/StarTrue.svg'
import starFalse from '../../assets/StarFalse.svg'

const VehicleCard = ( {vehicleInfo, toggleFavorites} ) => {

  let favorited;
  !vehicleInfo.favorited ? favorited = [starTrue] : favorited = [starFalse]

  return (
    <div className="card">
      <table>
        <thead>
          <tr>
          <td colSpan="2" className='vehicle-name info-card-title'>{vehicleInfo.name}</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='info-card-row'>Model:</td>
            <td className='vehicle-model info-card-info vehicle'>{vehicleInfo.model}</td>
          </tr>
          <tr>
            <td className='info-card-row'>Class:</td>
            <td className='vehicle-vehicle info-card-info vehicle'>{vehicleInfo.vehicle_class}</td>
          </tr>
          <tr>
            <td className='info-card-row'>Passengers:</td>
            <td className='vehicle-passenger info-card-info vehicle'>{vehicleInfo.passengers}</td>
          </tr>
        </tbody>
      </table>
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

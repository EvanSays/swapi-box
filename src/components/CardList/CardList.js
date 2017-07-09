import React from 'react';
import './CardList.css';
import PersonCard from '../PersonCard/PersonCard';
import PlanetCard from '../PlanetCard/PlanetCard';
import VehicleCard from '../VehicleCard/VehicleCard';
import PropTypes from 'prop-types';
import Loader from '../Loader/Loader'

const CardList = ({ peopleArray,
                    planetArray,
                    vehicleArray,
                    buttonState,
                    toggleFavorites,
                    renderArray,
                    loading }) => {

  const array = renderArray.map((obj) => {

      if (obj.type === 'people') {
      return <PersonCard key={Math.round(Date.now() * Math.random())}
                         toggleFavorites={toggleFavorites}
                         peopleInfo={obj} />
      } else if (obj.type === 'planet') {
        return <PlanetCard key={Math.round(Date.now() * Math.random())}
                           toggleFavorites={toggleFavorites}
                           planetInfo={obj} />
      } else if (obj.type === 'vehicle'){
       return <VehicleCard key={Math.round(Date.now() * Math.random())}
                           toggleFavorites={toggleFavorites}
                           vehicleInfo={obj} />
      }
    })
    const render = loading ? <Loader /> : array
    return (
      <div className="card-container">
        {render}
      </div>
      )
}

CardList.propTypes = {
  peopleArray: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
  planetArray: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
  vehicleArray: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
  buttonState: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  toggleFavorites: PropTypes.func.isRequired,
  renderArray: PropTypes.array.isRequired
}

export default CardList;

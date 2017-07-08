import React from 'react';
import './CardList.css';
import PersonCard from '../Card/PersonCard';
import PlanetCard from '../Card/PlanetCard';
import VehicleCard from '../Card/VehicleCard';
import './CardList.css';


const CardList = ({ peopleArray,
                    planetArray,
                    vehicleArray,
                    buttonState,
                    toggleFavorites,
                    renderArray }) => {


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
    return (
      <div className="card-container">
        {array}
      </div>
      )


}

export default CardList;

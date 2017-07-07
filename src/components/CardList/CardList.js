import React from 'react';
import './CardList.css';
import PersonCard from '../Card/PersonCard';
import PlanetCard from '../Card/PlanetCard';
import VehicleCard from '../Card/VehicleCard';
import './CardList.css';


const CardList = ({peopleArray, planetArray, vehicleArray, buttonState, addFavorites, renderArray}) => {

  const array = renderArray.map((obj) => {
      if (obj.type === 'people') {
        console.log(obj.type);
      return <PersonCard addFavorites={addFavorites} peopleInfo={obj}/>
      } else if (obj.type === 'planet') {
          console.log(obj.type);
        return <PlanetCard addFavorites={addFavorites} planetInfo={obj}/>
      } else if (obj.type === 'vehicle'){
       return <VehicleCard addFavorites={addFavorites} vehicleInfo={obj}/>
      }
    })
    return (
      <div className="card-container">
        {array}
      </div>
      )


}

export default CardList;

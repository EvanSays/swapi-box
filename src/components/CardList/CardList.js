import React from 'react';
import './CardList.css';
import PersonCard from '../Card/PersonCard';
import PlanetCard from '../Card/PlanetCard';
import VehicleCard from '../Card/VehicleCard'
import './CardList.css'


const CardList = ({peopleArray, planetArray, vehicleArray, buttonState}) => {
  console.log(peopleArray, planetArray, buttonState);
  if (buttonState === 'people' && peopleArray !== null) {
    console.log('hi');
    const personCard = peopleArray.map(person => {
      return <PersonCard peopleInfo={person}/>
    })
    return (
      <div className="card-container">
        {personCard}
      </div>
    )
  }

  else if (buttonState === 'planets' && planetArray !== null) {
    const planetsCard = planetArray.map(info => {
      console.log(info)
      return <PlanetCard planetInfo={info}/>
    })
    return (
      <div className="card-container">
        {planetsCard}
      </div>
    )
  }

  else if (buttonState === 'vehicles' && vehicleArray !== null) {
    const vehicleCard = vehicleArray.map(info => {
      return <VehicleCard vehicleInfo={info}/>
    })
    return (
      <div className="card-container">
        {vehicleCard}
      </div>
    )
  } else {
    return (
      <div></div>
    )
  }
}

export default CardList;

import React from 'react';
import './CardList.css';
import PersonCard from '../Card/PersonCard';
import PlanetCard from '../Card/PlanetCard';


const CardList = ({peopleArray, planetArray}) => {
  if (peopleArray === null) {
    return (
      <div>{console.log("NULLLLLLLL")}</div>
    )
  } else {
    const personCard = peopleArray.map(person => {
      return <PersonCard peopleInfo={person}/>
    })
    return (
      <div className="card-container">
        {personCard}
      </div>
    )
  }
  if (planetArray === null) {
    console.log('no', planetArray)
    return (
      <div>{console.log("no way pal")}</div>
    )
  } else {
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
}

export default CardList;

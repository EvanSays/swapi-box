import React from 'react';
import './CardList.css'
import Card from '../Card/Card'

const CardList = ({peopleArray}) => {
  if (peopleArray === null) {
    return (

      <div>{console.log("NULLLLLLLL")}</div>
    )
  } else {
    const personCard = peopleArray.map(person => {
      return <Card peopleInfo={person}/>
    })
    return (
      <div className="card-container">
        {personCard}
      </div>
    )
  }
}

export default CardList;

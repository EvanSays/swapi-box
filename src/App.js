import React, { Component } from 'react';
import './App.css';
import ScrollText from './components/ScrollText/ScrollText';
import Movie from './components/constructors/Movies';
import api from './data/api';
import Button from './components/Button/Button';
import CardList from './components/CardList/CardList'
import HelperData from './helper'

class App extends Component {
  constructor() {
    super()
    this.helper = new HelperData;
    this.state = {
      films: null,
      people: null,
      planets: null,
      vehicles: null,
      buttonName: null,
      renderArray: [],
      favorites: []
    }
    this.populatePeople = this.populatePeople.bind(this)
    this.populatePlanetDetails = this.populatePlanetDetails.bind(this)
    this.populateVehicles = this.populateVehicles.bind(this)
    this.populateFavorites = this.populateFavorites.bind(this)
    this.toggleFavorites = this.toggleFavorites.bind(this)

  }

  componentDidMount() {
    const movieArray = []
    const movieFetch = fetch(api.films)
    .then((res) => res.json())
    .then((info) => {
      info.results.forEach(obj => movieArray.push(new Movie(obj)))
    })
    .catch(function(error) {
      console.log('Request failed:', error);
    })

    Promise.all([movieFetch])
    .then(values => {
      this.setState ({
          films: movieArray
      })
    })
  }

  toggleFavorites(info) {
    info.favorited === false ? info.favorited = true :  info.favorited = false

    const favorites = this.state.favorites

    if(favorites.length === 0) {
      favorites.push(info)
      this.setState({
        favorites
      })
    }
  


  }




  populateFavorites() {
    const favorites = this.state.favorites
    this.setState({
      renderArray: favorites,
    })
  }

  populatePeople() {
    this.helper.getPeople(this)
    this.setState({
      buttonName: 'people'
    })
  }

  populatePlanetDetails() {
    this.helper.getPlanets(this)
    this.setState({
      buttonName: 'planets'
    })
  }

  populateVehicles() {
    this.helper.getVehicles(this)
    this.setState({
      buttonName: 'vehicles'
    })
  }

  render() {
    if(!this.state.films){
      return (
        <div></div>
      );
    } else {
      return (
        <div className="App">
          <ScrollText films={this.state.films} />
          <Button populatePeople={this.populatePeople}
                  populatePlanetDetails={this.populatePlanetDetails}
                  populateVehicles={this.populateVehicles}
                  populateFavorites={this.populateFavorites}
                  favorites={this.state.favorites} />
          <CardList peopleArray={this.state.people}
                    planetArray={this.state.planets}
                    vehicleArray={this.state.vehicles}
                    buttonState={this.state.buttonName}
                    toggleFavorites={this.toggleFavorites}
                    renderArray={this.state.renderArray} />
        </div>
      )
    }
  }
}

export default App;

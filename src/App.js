import React, { Component } from 'react';
import './App.css';
import ScrollText from './components/ScrollText/ScrollText';
import Movie from './components/constructors/Movies';
import Api from './data/api';
import Button from './components/Button/Button';
import CardList from './components/CardList/CardList'
import HelperData from './helper'

class App extends Component {
  constructor() {
    super()
    this.helper = new HelperData();
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
    const movieFetch = fetch(Api.films)
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
    } else {
      const find = favorites.find(x => x.id === info.id);
      if(find === undefined) {
        favorites.push(info)
        this.setState({
          favorites
        })
      }
      return
    }
  }


  populateFavorites() {
    const favorites = this.state.favorites
    this.setState({
      renderArray: favorites,
    })
  }

  populatePeople() {
    if(this.state.people === null) {
      this.helper.getPeople(this)
    } else {
      this.setState({
        renderArray: this.state.people
      })
    }
    this.setState({
      buttonName: 'people'
    })
  }

  populatePlanetDetails() {
    console.log(this.state.planets);
    if (this.state.planets === null) {
      this.helper.getPlanets(this)
    } else {
      this.setState({
        renderArray: this.state.planets
      })
    }
    this.setState({
      buttonName: 'planets'
    })
  }

  populateVehicles() {
    if (this.state.vehicles === null) {
      this.helper.getVehicles(this)
    } else {
      this.setState({
        renderArray: this.state.vehicles
      })
    }
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
            <Button populatePeople={this.populatePeople}
              populatePlanetDetails={this.populatePlanetDetails}
              populateVehicles={this.populateVehicles}
              populateFavorites={this.populateFavorites}
              favorites={this.state.favorites} />
              <ScrollText films={this.state.films} />
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

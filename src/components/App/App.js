import React, { Component } from 'react';
import './App.css';
import ScrollText from '../ScrollText/ScrollText';
import Button from '../Button/Button';
import CardList from '../CardList/CardList'
import HelperData from '../../helper'

class App extends Component {
  constructor() {
    super()
    this.helper = new HelperData();
    this.state = {
      films: null,
      people: null,
      planets: null,
      vehicles: null,
      renderArray: [],
      favorites: [],
      loading: false
    }
    this.populatePeople = this.populatePeople.bind(this)
    this.populatePlanets = this.populatePlanets.bind(this)
    this.populateVehicles = this.populateVehicles.bind(this)
    this.populateFavorites = this.populateFavorites.bind(this)
    this.toggleFavorites = this.toggleFavorites.bind(this)
  }

  componentDidMount() {
    if(this.state.films == null){
      this.helper.getMovies(this)
    }
  }

  toggleFavorites(info) {
    info.favorited === false ? info.favorited = true :  info.favorited = false

    const favorites = this.state.favorites

    if(favorites.length === 0) {
      favorites.push(info)
      this.favSetState(favorites);
    } else {
      const index = favorites.findIndex(x => x.id === info.id);
      if(index === -1) {
        favorites.push(info)
        this.favSetState(favorites);
      } else {
        favorites.splice(index, 1);
        this.favSetState(favorites);
      }
      return
    }
  }

  favSetState(favorites) {
    this.setTheState('favorites', favorites)
  }


  populateFavorites() {
    const favorites = this.state.favorites
    this.setTheState('renderArray', favorites)
  }

  populatePeople() {
    const people = this.state.people
    !people ? this.helper.getPeople(this) : this.setTheState('renderArray', people)
  }

  populatePlanets() {
    const planets = this.state.planets
    !planets ? this.helper.getPlanets(this) : this.setTheState('renderArray', planets)
  }

  populateVehicles() {
    const vehicles = this.state.vehicles
    !vehicles ? this.helper.getVehicles(this) : this.setTheState('renderArray', vehicles)
  }

  setTheState(name, data) {
    this.setState({
      [name]: data
    })
  }

  render() {
    if(!this.state.films){
      return (
        <div></div>
      );
    } else {
      return (
        <div className="App page-loader">
            <Button populatePeople={this.populatePeople}
              populatePlanets={this.populatePlanets}
              populateVehicles={this.populateVehicles}
              populateFavorites={this.populateFavorites}
              favorites={this.state.favorites} />
            <div className="main-container">
              <ScrollText films={this.state.films} />
              <CardList peopleArray={this.state.people}
                        planetArray={this.state.planets}
                        vehicleArray={this.state.vehicles}
                        toggleFavorites={this.toggleFavorites}
                        renderArray={this.state.renderArray}
                        loading={this.state.loading} />
            </div>
        </div>
      )
    }
  }
}

export default App;

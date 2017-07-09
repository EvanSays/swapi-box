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
      favorites: [],
      loading: false
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
    this.setState({
      favorites
    })
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
    // this.setState({
    //   buttonName: 'people'
    // })
  }

  populatePlanetDetails() {
    if (this.state.planets === null) {
      this.helper.getPlanets(this)
    } else {
      this.setState({
        renderArray: this.state.planets
      })
    }
    // this.setState({
    //   buttonName: 'planets'
    // })
  }

  populateVehicles() {
    if (this.state.vehicles === null) {
      this.helper.getVehicles(this)
    } else {
      this.setState({
        renderArray: this.state.vehicles
      })
    }
    // this.setState({
    //   buttonName: 'vehicles'
    // })
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
              populatePlanetDetails={this.populatePlanetDetails}
              populateVehicles={this.populateVehicles}
              populateFavorites={this.populateFavorites}
              favorites={this.state.favorites} />
            <div className="main-container">
              <ScrollText films={this.state.films} />
              <CardList peopleArray={this.state.people}
                        planetArray={this.state.planets}
                        vehicleArray={this.state.vehicles}
                        buttonState={this.state.buttonName}
                        toggleFavorites={this.toggleFavorites}
                        renderArray={this.state.renderArray}
                        loading={this.state.loading}/>
            </div>
        </div>
      )
    }
  }
}

export default App;

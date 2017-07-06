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
      people: null
    }

    this.populatePeople = this.populatePeople.bind(this)
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

  populatePeople() {
    this.helper.getPeople(this)
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
          <Button populatePeople={this.populatePeople} />
          <CardList />
        </div>
      )
    }
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import ScrollText from './components/ScrollText/ScrollText';
import Movie from './components/constructors/Movies'
import api from './data/api'

class App extends Component {
  constructor() {
    super()
    this.state = {
      films: []
    }
  }

  componentDidMount() {
    const movieArray = []

    const movieFetch = fetch(api.films)
    .then((res) => res.json())
    .then((info) => {
      movieArray.push(info.results.map(obj => new Movie(obj)))
    }).catch(function(error) {
      console.log('Request failed:', error);
    })

      Promise.all([movieFetch]).then(values => {
        this.setState({
           films: this.state.films.concat(...movieArray)
        })
      })
  }

  render() {
    return (
      <div className="App">
        <ScrollText films={this.state.films} />
      </div>
    );
  }
}

export default App;

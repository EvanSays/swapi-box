import React, { Component } from 'react';
import './App.css';
import ScrollText from './components/ScrollText/ScrollText';
import Movie from './components/constructors/Movies'
import api from './data/api'

class App extends Component {
  constructor() {
    super()
    this.state = {
      films: null
    }
  }

  componentDidMount() {
    const movieArray = []

    const movieFetch = fetch(api.films)
    .then((res) => res.json())
    .then((info) => {
      info.results.forEach(obj => movieArray.push(new Movie(obj)))
    }).catch(function(error) {
      console.log('Request failed:', error);
    })

      Promise.all([movieFetch]).then(values => {
        this.setState({
           films: movieArray
        })
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
        </div>
      )
    }
  }
}

export default App;

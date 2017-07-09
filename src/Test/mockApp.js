import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super()
    this.state = {
      films: null,
      people: null,
      planets: null,
      vehicles: null,
      renderArray: [],
      favorites: [],
      loading: false
    }
  }
}

export default App

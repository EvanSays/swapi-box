

export default class HelperData {

  getPeople(appComponent) {
    fetch('https://swapi.co/api/people/').then(res => res.json()).then(data => {
      appComponent.setState({
        loading: true
      })
      const unresolvedPlaces = data.results.map(person => {
        return fetch(person.homeworld).then(res => res.json())
      })
      const unresolvedSpecies = data.results.map(person => {
        const species = person.species.map((url) => {
          return url
        })
        return fetch(species).then(res => res.json())
      })
      Promise.all([
        ...unresolvedPlaces,
        ...unresolvedSpecies
      ]).then(dataArray => {
        const homes = dataArray.slice(0, 10)
        const species = dataArray.slice(10)
        homes.map((place, i) => {
          return Object.assign(data.results[i], {
            homeworld: place.name,
            population: place.population,
            type: 'people',
            favorited: false,
            id: Math.round(Date.now() * Math.random())
          })
        })
        return species.map((type, i) => {
          return Object.assign(data.results[i], {
            species: type.name,
            language: type.language
          })
        })

      }).then((final) => {
        appComponent.setState({people: final,
                               renderArray: final,
                               loading: false })
      })
    })
  }

  getPlanets(app) {
    fetch('http://swapi.co/api/planets/')
    .then(res => res.json())
    .then(planets => {
      const unresolvedPlanets = planets.results.map((planet) => {
        app.setState({
          loading: true
        })
        const residentNames = planet.residents.map((resident) => {
          return fetch(resident).then(res => res.json()).then(data => data.name)
        })
        return Promise.all(residentNames).then(data => {
          if(data.length === 0){
            data = ['Uninhabited']
          }
          data = data.join(', ')
          return Object.assign(planet, {residents: data,
            type: 'planet',
            favorited: false,
            id: Math.round(Date.now() * Math.random())})
        })
      })
      return Promise.all(unresolvedPlanets)
    }).then(res => app.setState({planets: res,
                                 renderArray: res,
                                 loading: false}))
  }

  getVehicles(app) {
    fetch('http://swapi.co/api/vehicles/')
    .then(res => res.json())
    .then(vehicles => {
      const unresolvedVehicles = vehicles.results.map(vehicle => {
        app.setState({
          loading: true
        })
        return Object.assign(vehicle, {
          type: 'vehicle',
          favorited: false,
          id: Math.round(Date.now() * Math.random())
        })
      });
      return Promise.all(unresolvedVehicles).then(res => app.setState({vehicles: res,
                                                                       renderArray: res,
                                                                       loading: false }))
    })
  }

  getFavorites(app) {

  }

}

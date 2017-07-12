import Api from './data/api';
import Movie from './components/constructors/Movies'

export default class HelperData {


  getMovies(app) {
    app.setState({loading: true});
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
      const randNum = Math.floor((Math.random() * movieArray.length))
      app.setState ({
          films: movieArray[randNum],
          loading: false
      })
    })
  }

  getPeople(app) {
    app.setState({loading: true});
    fetch(Api.people).then(res => res.json()).then(data => {
      const unresolvedPlaces = data.results.map(person => {
        return fetch(person.homeworld).then(res => res.json())
      })
      const unresolvedSpecies = data.results.map(person => {
        const species = person.species.map((url) => {
          return url
        })
        return fetch(species[0]).then(res => res.json())
      })
      Promise.all([
        ...unresolvedPlaces,
        ...unresolvedSpecies
      ]).then(dataArray => {
        const homes = dataArray.slice(0, unresolvedPlaces.length)
        const species = dataArray.slice(unresolvedPlaces.length)
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
        app.setState({people: final,
                      renderArray: final,
                      loading: false})
      })
    })
  }

  getPlanets(app) {
    app.setState({loading: true});
    fetch(Api.planets)
    .then(res => res.json())
    .then(planets => {

      return Promise.all(this.unresolvedPlanets(planets))
    }).then(res => app.setState({planets: res,
                                 renderArray: res,
                                 loading: false}))
  }

  unresolvedPlanets (planets) {
    return planets.results.map((planet) => {
      return Promise.all(this.fetchResidents(planet)).then(data => {
        !data.length ? data = ['Uninhabited'] : null
        data = data.join(', ')
        return this.addResidents(planet, data)
      })
    })
  }

  addResidents(planet, data) {
    return Object.assign(planet, {residents: data,
      type: 'planet',
      favorited: false,
      id: Math.round(Date.now() * Math.random())})
  }

  fetchResidents(planet) {
    return planet.residents.map((resident) => {
      return fetch(resident).then(res => res.json()).then(data => data.name)
    })
  }

  getVehicles(app) {
    app.setState({loading: true});
    fetch(Api.vehicles)
    .then(res => res.json())
    .then(vehicles => {
      const unresolvedVehicles = vehicles.results.map(vehicle => {
        app.setState({
          loading: true
        })
        return Object.assign(vehicle, {
          type: 'vehicle',
          favorited: false,
          id: Math.floor(Math.random() * 20)
        })
      });
      return Promise.all(unresolvedVehicles).then(res => app.setState({vehicles: res,
                                                                       renderArray: res,                                                                   loading: false}))
    })
  }
}

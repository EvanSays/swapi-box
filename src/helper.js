import App from './App'

export default class HelperData {

  getPeople(appComponent) {
    console.log(appComponent.state);
    fetch('https://swapi.co/api/people/')
    .then(res => res.json())
    .then(data => {
      const unresolvedPlaces = data.results.map(person => {
        return fetch(person.homeworld)
        .then(res => res.json())
      })
      const unresolvedSpecies = data.results.map(person =>{
        const species = person.species.map((url)=> {
          return url
        })
        return fetch(species)
          .then(res => res.json())
      })
      Promise.all([...unresolvedPlaces, ...unresolvedSpecies])
      .then(dataArray => {
        const homes = dataArray.slice(0, 10)
        const species = dataArray.slice(10)
        homes.map((place, i) => {
          return Object.assign(data.results[i], { homeworld: place.name } )
        })
        return species.map((type, i) => {
          return Object.assign(data.results[i], { species: type.name, language: type.language } )
        })
      }).then((final) => {
        appComponent.setState({
          people: final
        })
        console.log(appComponent.state.people);
      })
    }).catch(function(error) {
      console.log('Request failed:', error);
    })
  }
}

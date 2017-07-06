import App from './App'

export default class HelperData {

  getPeople(appComponent) {
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
          return Object.assign(data.results[i], { homeworld: place.name, population: place.population } )
        })
        return species.map((type, i) => {
          return Object.assign(data.results[i], { species: type.name, language: type.language } )
        })

      }).then((final) => {
        appComponent.setState({
          people: final
        })
      })
    })
  }

  getPlanets() {
    fetch('http://swapi.co/api/planets/')
      .then(res => res.json())
      .then(data => {
          console.log(data);
        const unresolvedPlanets = data.results.map((planetObj) => {
          // console.log(planetObj);
           const person = planetObj.residents.map((resident) => {
             return fetch(resident)
              .then(res => res.json())
           })
            return Promise.all(person)
        })
          return Promise.all(unresolvedPlanets)
          .then(info => {
           return info.map((personArray, i) => {
              return personArray.map((personObj, index) => {
                    return Object.assign(data.results[i].residents, {[index]: personObj.name} )
                })
            })
          })
      }).then((final) => {
        console.log(final;
      })
  }


}

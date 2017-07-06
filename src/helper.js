import People from './components/constructors/People'

export default class PeopleData {
  constructor() {

  }

  getPeople() {
    fetch('https://swapi.co/api/people/')
    .then(res => res.json())
    .then(data => {
      const unresolvedPlaces = data.results.map(person => {
        return fetch(person.homeworld)
        .then(res => res.json())
      })
      Promise.all(unresolvedPlaces)
      .then(arrayOfHomes => {
        return arrayOfHomes.map((place, i) => {
          console.log(data.results);
          Object.assign(data.results[i], { homeworld: place.name } )
        })
      })
    })


      // return Promise.all(promises).then((places) => places.map((place, i) => Object.assign(data.results[i], {'homeworld': place.name}, {'population': place.population})))



    //  const promises2 = data.results.map((i) => console.log(i))
      // fetch(i.species).then((res) => res.json()))
      // return Promise.all(promises).then((places) => places.map((place, i) => Object.assign(data.results[i], {'homeworld': place.name}, {'population': place.population})))

    //})

  }

}

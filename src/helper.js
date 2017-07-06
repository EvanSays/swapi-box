import People from './components/constructors/People'

export default class PeopleData {
  constructor() {

  }

  getPeople() {
    const peopleArray =[]
    return fetch('https://swapi.co/api/people/')
    .then(res => res.json())
    .then(data => {
      const promises = data.results.map((i) =>
      fetch(i.homeworld).then((res) => res.json()))
      return Promise.all(promises).then((places) => places.map((place, i) => Object.assign(data.results[i], {'homeworld': place.name}, {'population': place.population})))
    })

  
    //  const promises2 = data.results.map((i) => console.log(i))
      // fetch(i.species).then((res) => res.json()))
      // return Promise.all(promises).then((places) => places.map((place, i) => Object.assign(data.results[i], {'homeworld': place.name}, {'population': place.population})))

    //})

  }

}


fetch('http://localhost:3001/api/frontend-staff')
.then((res) => res.json())
.then((info) => {
  const promises = info.bio.map((i) => // iterates through array and map returns anything given to it, which we're given it promises.
  fetch(i.info).then((res) => res.json()))

  //Now we're going to wait for all the promises to resolve
  return Promise.all(promises).then((members) => members.map((person, i) => Object.assign(info.bio[i], person)))

  // and assign them to the original object. To add the additional info.

  // we returned the promise.all to the original fetch promise so we can:
  .then((people) => this.setState({ staff: people }))
  .catch((error) => console.log(error))
})

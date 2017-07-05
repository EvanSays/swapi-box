export default class PeopleData {
  constructor() {

  }

  getPeople() {
    return fetch('https://swapi.co/api/people/')
    .then(res => res.json())
    .then(data => Promise.all(data.results.map(x => fetch(x.homeworld))))


  }
  someThing(){
    return Promise.all([this.getPeople()])
  }
}

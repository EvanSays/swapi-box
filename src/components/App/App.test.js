import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import App from './App';
import fetchMock from 'fetch-mock'
import { mockMovies, mockPeople } from '../../data/testData.js'
import { mockPeopleData, mockPeopleHomeworld1, mockPeopleSpecies1, mockPeopleHomeworld2, mockPeopleSpecies2 } from '../../data/mockPeopleData.js'
import { mockPlanetsData, mockPlanetsPerson1, mockPlanetsPerson2, mockPlanetsPerson3 } from '../../data/mockPlanetsData.js'

describe('App', () => {

  const resolveAfter2Seconds = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  }
  afterEach(() => {
    expect(fetchMock.calls().unmatched).toEqual([]);
    fetchMock.restore()
  })

  it('should display a movie text, scrolling, with correct information', async () => {
    fetchMock.get('http://swapi.co/api/films/', {
      status: 500,
      body: mockMovies,
    });
    const component = mount(<App/>);
    // await wrapper.update() DOESN'T WORK
    await resolveAfter2Seconds(); // WORKS
    // console.log(component.debug());
    expect(fetchMock.called()).toEqual(true);

    expect(component.state().films.title).toEqual('A New Hope');
    expect(component.state().films.opening_crawl).toEqual("It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",);
    expect(component.state().films.release_date).toEqual('1977-05-25');
  });

  it('should add people to the people array when people button is clicked', async () => {
    fetchMock.get('http://swapi.co/api/films/', {
      status: 500,
      body: mockMovies
    });
    fetchMock.get('http://swapi.co/api/people/', {
      status: 500,
      body: mockPeopleData
    });
    fetchMock.get('http://swapi.co/api/planets/1/', {
      status: 500,
      body: mockPeopleHomeworld1
    });
    fetchMock.get('http://swapi.co/api/species/1/', {
      status: 500,
      body: mockPeopleSpecies1
    });
    fetchMock.get('http://swapi.co/api/planets/1/', {
      status: 500,
      body: mockPeopleHomeworld2
    });
    fetchMock.get('http://swapi.co/api/species/2/', {
      status: 500,
      body: mockPeopleSpecies2
    });

    const component = mount(<App/>);
    await resolveAfter2Seconds(); // WORKS

    expect(component.state().people).toEqual(null)

    const peoplebtn = component.find('.populate-people')
    peoplebtn.simulate('click')

    await resolveAfter2Seconds(); // WORKS

    expect(component.state().people.length).toEqual(2)
  })

  it('should add planets to the planets state when clicking planets button', async () => {
    fetchMock.get('http://swapi.co/api/films/', {
      status: 500,
      body: mockMovies
    });
    fetchMock.get('http://swapi.co/api/planets/', {
      status: 500,
      body: mockPlanetsData
    });
    fetchMock.get('http://swapi.co/api/people/5/', {
      status: 500,
      body: mockPlanetsPerson1
    });
    fetchMock.get('http://swapi.co/api/people/68/', {
      status: 500,
      body: mockPlanetsPerson2
    });
    fetchMock.get('http://swapi.co/api/people/81/', {
      status: 500,
      body: mockPlanetsPerson3
    });

    const component = mount(<App/>);

    await resolveAfter2Seconds(); // WORKS
    const planetBtn = component.find('.populate-planet')
    planetBtn.simulate('click')
    expect(component.state().planets).toEqual(null)

    await resolveAfter2Seconds(); // WORKS
    expect(component.state().planets.length).toEqual(4)
  })

  it.skip('should add vehicles to the vehicles state when clicking vehicles button', async () => {
    fetchMock.get('http://swapi.co/api/films/', {
      status: 500,
      body: mockMovies
    });
    fetchMock.get('http://swapi.co/api/planets/', {
      status: 500,
      body: mockPlanetsData
    });
    fetchMock.get('http://swapi.co/api/people/5/', {
      status: 500,
      body: mockPlanetsPerson1
    });
    fetchMock.get('http://swapi.co/api/people/68/', {
      status: 500,
      body: mockPlanetsPerson2
    });
    fetchMock.get('http://swapi.co/api/people/81/', {
      status: 500,
      body: mockPlanetsPerson3
    });

    const component = mount(<App/>);

    await resolveAfter2Seconds(); // WORKS
    const planetBtn = component.find('.populate-planet')
    planetBtn.simulate('click')
    expect(component.state().planets).toEqual(null)

    await resolveAfter2Seconds(); // WORKS
    expect(component.state().planets.length).toEqual(4)
  })

  it('should add a favorite person to the favorites array when star is clicked', async () => {
    fetchMock.get('http://swapi.co/api/films/', {
      status: 500,
      body: mockMovies
    });
    fetchMock.get('http://swapi.co/api/people/', {
      status: 500,
      body: mockPeopleData
    });
    fetchMock.get('http://swapi.co/api/planets/1/', {
      status: 500,
      body: mockPeopleHomeworld1
    });
    fetchMock.get('http://swapi.co/api/species/1/', {
      status: 500,
      body: mockPeopleSpecies1
    });
    fetchMock.get('http://swapi.co/api/planets/1/', {
      status: 500,
      body: mockPeopleHomeworld2
    });
    fetchMock.get('http://swapi.co/api/species/2/', {
      status: 500,
      body: mockPeopleSpecies2
    });

    const component = mount(<App/>);
    await resolveAfter2Seconds(); // WORKS

    const peoplebtn = component.find('.populate-people')
    peoplebtn.simulate('click')

    await resolveAfter2Seconds(); // WORKS

    expect(component.state().favorites).toEqual([])
    const star = component.find('.star-button').first()

    star.simulate('click')

    expect(component.state().favorites.length).toEqual(1)
  })

  it('should remove a person from the favorites array when star is clicked', async () => {
    fetchMock.get('http://swapi.co/api/films/', {
      status: 500,
      body: mockMovies
    });
    fetchMock.get('http://swapi.co/api/people/', {
      status: 500,
      body: mockPeopleData
    });
    fetchMock.get('http://swapi.co/api/planets/1/', {
      status: 500,
      body: mockPeopleHomeworld1
    });
    fetchMock.get('http://swapi.co/api/species/1/', {
      status: 500,
      body: mockPeopleSpecies1
    });
    fetchMock.get('http://swapi.co/api/planets/1/', {
      status: 500,
      body: mockPeopleHomeworld2
    });
    fetchMock.get('http://swapi.co/api/species/2/', {
      status: 500,
      body: mockPeopleSpecies2
    });

    const component = mount(<App/>);

    await resolveAfter2Seconds(); // WORKS
    const peoplebtn = component.find('.populate-people')
    peoplebtn.simulate('click')

    await resolveAfter2Seconds(); // WORKS
    expect(component.state().favorites).toEqual([])
    let star = component.find('.star-button').first()

    star.simulate('click')
    expect(component.state().favorites.length).toEqual(1)

    const favBtn = component.find('.fave-btn')
    favBtn.simulate('click')

    star = component.find('.star-button').first()
    star.simulate('click')
    expect(component.state().favorites.length).toEqual(0)

  })

});

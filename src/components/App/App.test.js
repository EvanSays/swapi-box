import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import App from './App';
import fetchMock from 'fetch-mock'
import { mockMovies, mockPeople } from '../../data/testData.js'
import { mockPeopleData, mockPeopleHomeworld1, mockPeopleSpecies1, mockPeopleHomeworld2, mockPeopleSpecies2 } from '../../data/mockPeopleData.js'

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


  it.skip('should add a favorite to the favorites array when star is clicked', async () => {
    fetchMock.get('http://swapi.co/api/films/', {
      status: 500,
      body: mockMovies
    });
    fetchMock.get('http://swapi.co/api/people/', {
      status: 500,
      body: mockPeopleData
    });
    // fetchMock.get('http://swapi.co/api/planets/1/', {
    //   status: 500,
    //   body: mockPeopleHomeworld1
    // });
    // fetchMock.get('http://swapi.co/api/species/1/', {
    //   status: 500,
    //   body: mockPeopleSpecies1
    // });
    // fetchMock.get('http://swapi.co/api/planets/1/', {
    //   status: 500,
    //   body: mockPeopleHomeworld2
    // });
    // fetchMock.get('http://swapi.co/api/species/2/', {
    //   status: 500,
    //   body: mockPeopleSpecies2
    // });

    const component = mount(<App/>);
    await resolveAfter2Seconds(); // WORKS

    const peoplebtn = component.find('.populate-people')
    peoplebtn.simulate('click')

  })
});

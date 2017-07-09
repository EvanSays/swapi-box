import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import App from '../App';
import fetchMock from 'fetch-mock'
import { mockMovies } from './testData.js'

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
    console.log(component.debug());
    expect(fetchMock.called()).toEqual(true);

    expect(component.state().films.title).toEqual('A New Hope');
    expect(component.state().films.opening_crawl).toEqual("It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",);
    expect(component.state().films.release_date).toEqual('1977-05-25');
  });

  
});

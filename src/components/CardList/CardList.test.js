import React from 'react';
import { shallow, mount } from 'enzyme';
import CardList from './CardList';
import { peopleArray, planetsArray, vehiclesArray } from '../../data/testData'

describe('CardList', () => {
  let mockFn
  let render

  let componentPeople;
  let componentPlanets;
  let componentVehicle;
  let componentLoader

  beforeEach(() => {
    mockFn = jest.fn()
    componentPeople = mount(<CardList peopleArray={peopleArray}
                                      planetArray={planetsArray}
                                      vehicleArray={vehiclesArray}
                                      buttonState={{}}
                                      toggleFavorites={mockFn}
                                      renderArray={peopleArray}
                                      loading={false} />)

    componentPlanets = mount(<CardList peopleArray={peopleArray}
                                       planetArray={planetsArray}
                                       vehicleArray={vehiclesArray}
                                       buttonState={{}}
                                       toggleFavorites={mockFn}
                                       renderArray={planetsArray}
                                       loading={false} />)

     componentVehicle = mount(<CardList peopleArray={peopleArray}
                                       planetArray={planetsArray}
                                       vehicleArray={vehiclesArray}
                                       buttonState={{}}
                                       toggleFavorites={mockFn}
                                       renderArray={vehiclesArray}
                                       loading={false} />)

     componentLoader = mount(<CardList peopleArray={peopleArray}
                                       planetArray={planetsArray}
                                       vehicleArray={vehiclesArray}
                                       buttonState={{}}
                                       toggleFavorites={mockFn}
                                       renderArray={peopleArray}
                                       loading={true} />)



})

  it('should exist', () => {

    expect(componentPeople.hasClass('card-container')).toBe(true)
  })

  it('people array should have a length of 2', () => {

    expect(componentPeople.find('.card').length).toEqual(2)
  })

  it('planets array should have a length of 2', () => {

    expect(componentPlanets.find('.card').length).toEqual(1)
  })

  it('people array should have a length of 2', () => {

    expect(componentVehicle.find('.card').length).toEqual(2)
  })

  it('should display loader when data is not yet available', () => {

    expect(componentLoader.find('.loading-section').length).toEqual(1)
  })
})

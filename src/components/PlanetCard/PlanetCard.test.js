import React from 'react'
import { shallow, mount } from 'enzyme'
import PlanetCard from './PlanetCard'


describe('PlanetCard', () => {

  let mockFn
  let component

  const object = {
    name: "Alderaan",
    terrain: "grasslands, mountains",
    population: "2000000000",
    climate: "temperate",
    residents: "Leia Organa, Bail Prestor Organa, Raymus Antilles"
  }

  beforeEach(() => {
    mockFn = jest.fn()
    component = shallow(<PlanetCard planetInfo={object} toggleFavorites={mockFn}/>)
  })

  it('should have a class', () => {
    expect(component.hasClass('card')).toBe(true)
  })

  it('should render the correct information', () => {
    const name = component.find('.planet-name')
    const terrain = component.find('.planet-terrain')
    const population = component.find('.planet-population')
    const climate = component.find('.planet-climate')
    const residents = component.find('.planet-residents')

    expect(name.text()).toEqual('Alderaan')
    expect(terrain.text()).toEqual('grasslands, mountains')
    expect(population.text()).toEqual('2000000000')
    expect(climate.text()).toEqual('temperate')
    expect(residents.text()).toEqual('Leia Organa, Bail Prestor Organa, Raymus Antilles')
  })

  it('should have a button that toggles favorties', () => {
    const button = component.find('.star-button')

    expect(mockFn).toHaveBeenCalledTimes(0)
    button.simulate('click')
    expect(mockFn).toHaveBeenCalledTimes(1)
  })
})

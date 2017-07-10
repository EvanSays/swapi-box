import React from 'react';
import { shallow, mount } from 'enzyme';
import PersonCard from './PersonCard';

describe('PersonCard', () => {
  let component;
  let mockFn;

  const object = {
    homeworld: "Tatooine",
    id: 660134495380,
    language: "Galactic Basic",
    name: "Luke Skywalker",
    population: "200000",
    species: "Human",
    type: "people"
  }

  beforeEach(() => {
    mockFn = jest.fn()
    component = shallow(<PersonCard peopleInfo={object} toggleFavorites={mockFn} />)
  })
  it('should exist', () => {
    expect(component.hasClass('card')).toBe(true)
  })

  it('should render the correct information', () => {
    const name = component.find('.person-name')
    const hometown = component.find('.person-town')
    const species = component.find('.person-species')
    const language = component.find('.person-language')
    const population = component.find('.person-pop')

    expect(name.text()).toEqual('Luke Skywalker')
    expect(hometown.text()).toEqual('Tatooine')
    expect(species.text()).toEqual('Human')
    expect(language.text()).toEqual('Galactic Basic')
    expect(population.text()).toEqual('200000')
  })

  it('should have a button that toggles favorites', () => {
    const button = component.find('.star-button')

    expect(mockFn).toHaveBeenCalledTimes(0)
    button.simulate('click')
    expect(mockFn).toHaveBeenCalledTimes(1)
  })
})

import React from 'react';
import { shallow, mount } from 'enzyme'
import Button from '../components/Button/Button'


describe('person button', () => {
  let component;
  let mockFn1
  let mockFn2
  let mockFn3
  let mockFn4
  beforeEach(() => {
    mockFn1 = jest.fn()
    mockFn2 = jest.fn()
    mockFn3 = jest.fn()
    mockFn4 = jest.fn()
    component = shallow(<Button populatePeople={mockFn1} populatePlanets={mockFn2} populateVehicles={mockFn3} populateFavorites={mockFn4} favorites={[]} />)
    })
  it('should have a classfield', () => {
    expect(component.hasClass('header-container')).toBe(true);
  })

  it('should fire the populate people function 1 time when clicked', () => {
    const button = component.find('.populate-people')

    expect(mockFn1).toHaveBeenCalledTimes(0)
    button.simulate('click')
    expect(mockFn1).toHaveBeenCalledTimes(1);
  })

  it('should fire the populate planet function 1 time when clicked', () => {
    const button = component.find('.populate-planet')

    expect(mockFn2).toHaveBeenCalledTimes(0)
    button.simulate('click')
    expect(mockFn2).toHaveBeenCalledTimes(1)
  })

  it('should fire the populate vehicles function 1 time when clicked', () => {
    const button = component.find('.populate-vehicle')

    expect(mockFn3).toHaveBeenCalledTimes(0)
    button.simulate('click')
    expect(mockFn3).toHaveBeenCalledTimes(1)
  })

  it('should fire the populate favorites function 1 time when clicked', () => {
    const button = component.find('.fave-btn')

    expect(mockFn4).toHaveBeenCalledTimes(0)
    button.simulate('click')
    expect(mockFn4).toHaveBeenCalledTimes(1)
  })
  it('favorites should have a counter feature', () => {
    let array = [{},{}]
    const component = shallow(<Button populatePeople={mockFn1} populatePlanets={mockFn2} populateVehicles={mockFn3} populateFavorites={mockFn4} favorites={array} />)
    const counter = component.find('.counter')

    expect(counter.text()).toEqual('2')
  })

})

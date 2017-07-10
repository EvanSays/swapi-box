import React from 'react'
import { shallow, mount } from 'enzyme'
import VehicleCard from './VehicleCard'


describe('VehicleCard', () => {

  let mockFn
  let component

  const object = {
    model: "Digger Crawler",
    name: "Sand Crawler",
    passengers: "30",
    vehicle_class: "wheeled"
  }

  beforeEach(() => {
    mockFn = jest.fn()
    component = shallow(<VehicleCard vehicleInfo={object} toggleFavorites={mockFn}/>)
  })

  it('should have a class', () => {
    expect(component.hasClass('card')).toBe(true)
  })

  it('should render the correct information', () => {
    const name = component.find('.vehicle-name')
    const model = component.find('.vehicle-model')
    const vehicle = component.find('.vehicle-vehicle')
    const passenger = component.find('.vehicle-passenger')

    expect(name.text()).toEqual('Sand Crawler')
    expect(model.text()).toEqual('Digger Crawler')
    expect(vehicle.text()).toEqual('wheeled')
    expect(passenger.text()).toEqual('30')
  })

  it('should have a button that toggles favorties', () => {
    const button = component.find('.star-button')

    expect(mockFn).toHaveBeenCalledTimes(0)
    button.simulate('click')
    expect(mockFn).toHaveBeenCalledTimes(1)
  })
})

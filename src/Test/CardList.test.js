import React from 'react';
import { shallow, mount } from 'enzyme';
import CardList from '../components/CardList/CardList';

describe('CardList', () => {
  let component;
  let mockFn

  beforeEach(() => {
    mockFn = jest.fn()
    component = shallow(<CardList peopleArray={[]}
                                  planetArray={[]}
                                  vehicleArray={[]}
                                  buttonState={{}}
                                  toggleFavorites={mockFn}
                                  renderArray={[]}
                                  loading/>)
  })
  it('should exist', () => {
    expect(component.hasClass('card-container')).toBe(true)
  })

  it('should ')
})

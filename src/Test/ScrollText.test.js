import React from 'react'
import { shallow, mount } from 'enzyme'
import ScrollText from '../components/ScrollText/ScrollText'
import { moviesArray } from './testData.js'


describe('ScrollText', () => {

  let component

  beforeEach(() => {
    component = shallow(<ScrollText films={moviesArray[0]}/>)
  })

  it('should have a class', () => {
    expect(component.hasClass('scroll-text')).toBe(true)
  })
})

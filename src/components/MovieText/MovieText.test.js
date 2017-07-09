import React from 'react'
import { shallow, mount } from 'enzyme'
import MovieText from './MovieText'
import { moviesArray } from '../../data/testData.js'

describe('ScrollText', () => {

  let component

  beforeEach(() => {
    component = shallow(<MovieText movie={moviesArray[0]}/>)
  })

  it('should have a class', () => {
    expect(component.hasClass('movie-text')).toBe(true)
  })

  it('should render the correct information', () => {
    const text = component.find('.opening-crawl-text')
    const title = component.find('.movie-title')
    const date = component.find('.movie-date')

    expect(text.text()).toEqual(moviesArray[0].opening_crawl)
    expect(title.text()).toEqual(moviesArray[0].title)
    expect(date.text()).toEqual(moviesArray[0].release_date)
  })
})

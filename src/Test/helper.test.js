import React from 'react'
import { shallow, mount } from 'enzyme'
import HelperData from '../helper.js'
import App from '../App.js'

describe('helper', () => {

  let helper
  let component

  beforeEach(() => {
    helper = new HelperData();
    component = shallow(<App/>)
  })

  it.skip('should work', () =>{
  helper.getMovies(component);

  setTimeout(() => {
    console.log(component.state());

  },2000)

  })
})

import React from 'react';
import App from './App';
import {shallow, mount} from 'enzyme';
import { act } from "react-dom/test-utils";

describe('<App />', () => {
  let component: any;

  beforeEach(() => {
    component = mount(<App />);
  })

  afterEach(() => {
    component.unmount();
  })

  it('adds a gift to gift list', () => {
    const gifts = component.find('li');
    expect(gifts.length).toBe(0);

    const change = component.find('input[type="text"]').prop('onChange');
    // this gives an error that says it has to be wrapped in act...
    /* change({ target: { value: 'dingos' } }); */
    act(() => {
      change({ target: { value: 'dingos' } });
    });

    component.update();
    component.find('button').simulate('click')
    component.update();
    expect(gifts.length).toBe(1); // fail
  })
})


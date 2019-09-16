import React from 'react';
import { mount } from 'enzyme';
import Input from '.';

describe('Input Component', function() {
  it('renders without props', function() {
    const wrapper = mount(<Input type="text" />);
    const label = wrapper.find('.gz-label');
    const input = wrapper.find('.gz-input');
    expect(label.length).toBe(1);
    expect(input.length).toBe(1);
  })
})
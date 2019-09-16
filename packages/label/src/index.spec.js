import React from 'react';
import { mount } from 'enzyme';
import Label from '.';

describe('Label Component', function() {
  it('renders without props', function() {
    const wrapper = mount(<Label />);
    const label = wrapper.find('.gz-label');
    expect(label.length).toBe(1);
  })

  it('renders children when passed in', () => {
    const wrapper = mount(
      <Label>
        <p className="child">Some Child</p>
      </Label>
    );

    const child = wrapper.find('.child')
    expect(child.length).toBe(1)
  })

  it('handles onClick events', () => {
    const onClick = jest.fn()
    const wrapper = mount(
      <Label onClick={onClick} />
    )

    wrapper.find('label').simulate('click')

    expect(onClick.mock.calls.length).toBe(1)
  })
})
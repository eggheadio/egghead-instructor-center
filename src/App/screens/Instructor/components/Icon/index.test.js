import React from 'react'
import {create} from 'react-test-renderer'
import {forEach, keys} from 'lodash'
import Icon, {types, sizes} from '.'

test('types', () => {
  forEach(keys(types), (type) => (
    expect(create(
      <Icon type={type} />
    )).toMatchSnapshot()
  ))
})

test('sizes', () => {
  forEach(keys(sizes), (size) => (
    expect(create(
      <Icon
        type='more-info'
        size={size}
      />
    )).toMatchSnapshot()
  ))
})

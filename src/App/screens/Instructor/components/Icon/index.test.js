import React from 'react'
import renderer from 'react-test-renderer'
import Icon from '.'

test('types', () => {
  const tree = renderer.create(
    <Icon type='more-info' />
  )
  expect(tree).toMatchSnapshot()
})

test('sizes', () => {
  const tree = renderer.create(
    <Icon
      type='more-info'
      size='3'
    />
  )
  expect(tree).toMatchSnapshot()
})

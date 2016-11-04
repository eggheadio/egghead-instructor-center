import React from 'react'
import renderer from 'react-test-renderer'
import Logo from './index'

test('Default', () => {
  const tree = renderer.create(
    <Logo />
  )
  expect(tree).toMatchSnapshot()
})

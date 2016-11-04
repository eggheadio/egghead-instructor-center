import React from 'react'
import renderer from 'react-test-renderer'
import Logo from '.'

test('default', () => {
  const tree = renderer.create(
    <Logo />
  )
  expect(tree).toMatchSnapshot()
})

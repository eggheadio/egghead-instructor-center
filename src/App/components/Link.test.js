import React from 'react'
import renderer from 'react-test-renderer'

import examples from '../../App/utils/examples'

import Link from './Link'

test('Default', () => {
  const tree = renderer.create(
    <Link url={examples.url}>
      {examples.text.short}
    </Link>
  )
  expect(tree).toMatchSnapshot()
})

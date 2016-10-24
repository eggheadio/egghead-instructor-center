import React from 'react'
import renderer from 'react-test-renderer'

import examples from '../../App/utils/examples'

import MoreInfoLink from './MoreInfoLink'

test('Default', () => {
  const tree = renderer.create(<MoreInfoLink 
    url={examples.url}
  />)
  expect(tree).toMatchSnapshot()
})

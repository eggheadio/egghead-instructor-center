import React from 'react'
import renderer from 'react-test-renderer'

import examples from '../../App/utils/examples'

import InfoBlock from './InfoBlock'

test('Default', () => {
  const tree = renderer.create(<InfoBlock
    title={examples.text.short}
    description={examples.text.medium}
    moreInfoUrl={examples.url}
  />)
  expect(tree).toMatchSnapshot()
})

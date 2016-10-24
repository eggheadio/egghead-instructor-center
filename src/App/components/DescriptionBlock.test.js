import React from 'react'
import renderer from 'react-test-renderer'

import examples from '../../App/utils/examples'

import DescriptionBlock from './DescriptionBlock'

test('Default', () => {
  const tree = renderer.create(
    <DescriptionBlock>
      {examples.text.short}
    </DescriptionBlock>
  )
  expect(tree).toMatchSnapshot()
})

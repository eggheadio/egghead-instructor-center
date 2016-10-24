import React from 'react'
import renderer from 'react-test-renderer'

import examples from '../../App/utils/examples'

import Checklist from './Checklist'

test('Default', () => {
  const tree = renderer.create(<Checklist items={[
    {
      isComplete: false,
      description: examples.text.short,
    },
    {
      isComplete: true,
      description: examples.text.short,
    },
  ]} />)
  expect(tree).toMatchSnapshot()
})

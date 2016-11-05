import React from 'react'
import renderer from 'react-test-renderer'
import {StringFixture} from '../SnapshotFixtures'
import Title from '.'

test('Title', () => {
  const tree = renderer.create(
    <Title>
      {StringFixture}
    </Title>
  )
  expect(tree).toMatchSnapshot()
})

import React from 'react'
import renderer from 'react-test-renderer'
import {StringFixture, ImageUrlFixture} from '../../../../components/SnapshotFixtures'
import Avatar from '.'

test('default', () => {
  const tree = renderer.create(
    <Avatar
      name={StringFixture}
      url={ImageUrlFixture}
    />
  )
  expect(tree).toMatchSnapshot()
})

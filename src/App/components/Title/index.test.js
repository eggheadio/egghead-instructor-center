import React from 'react'
import {create} from 'react-test-renderer'
import {StringFixture} from '../SnapshotFixtures'
import Title from '.'

test('default', () => {
  expect(create(
    <Title>
      {StringFixture}
    </Title>
  )).toMatchSnapshot()
})

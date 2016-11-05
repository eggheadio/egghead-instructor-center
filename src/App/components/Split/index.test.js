import React from 'react'
import renderer from 'react-test-renderer'
import {StringFixture, ComponentFixture} from '../SnapshotFixtures'
import Split from '.'

test('Split', () => {
  const tree = renderer.create(
    <Split
      title={StringFixture}
      main={<ComponentFixture />}
      aside={<ComponentFixture />}
    />
  )
  expect(tree).toMatchSnapshot()
})

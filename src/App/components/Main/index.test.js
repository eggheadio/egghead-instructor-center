import React from 'react'
import renderer from 'react-test-renderer'
import {ComponentFixture} from '../SnapshotFixtures'
import Main from '.'

test('Main', () => {
  const tree = renderer.create(
    <Main>
      <ComponentFixture />
    </Main>
  )
  expect(tree).toMatchSnapshot()
})

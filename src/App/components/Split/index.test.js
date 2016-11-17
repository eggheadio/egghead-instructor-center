import React from 'react'
import {create} from 'react-test-renderer'
import {StringFixture, ComponentFixture} from '../SnapshotFixtures'
import Split from '.'

test('default', () => {
  expect(create(
    <Split
      title={StringFixture}
      main={<ComponentFixture />}
      aside={<ComponentFixture />}
    />
  )).toMatchSnapshot()
})

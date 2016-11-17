import React from 'react'
import {create} from 'react-test-renderer'
import {ComponentFixture} from '../SnapshotFixtures'
import Main from '.'

test('default', () => (
  expect(create(
    <Main>
      <ComponentFixture />
    </Main>
  )).toMatchSnapshot()
))

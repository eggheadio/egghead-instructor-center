import React from 'react'
import {create} from 'react-test-renderer'
import {StringFixture} from '../SnapshotFixtures'
import Button from '.'

test('default', () => (
  expect(create(
    <Button>
      {StringFixture}
    </Button>
  )).toMatchSnapshot()
))

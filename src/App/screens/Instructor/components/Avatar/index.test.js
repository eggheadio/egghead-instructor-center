import React from 'react'
import {create} from 'react-test-renderer'
import {StringFixture, ImageUrlFixture} from '../../../../components/SnapshotFixtures'
import Avatar from '.'

test('default', () => (
  expect(create(
    <Avatar
      name={StringFixture}
      url={ImageUrlFixture}
    />
  )).toMatchSnapshot()
))
